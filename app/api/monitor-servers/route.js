import net from 'node:net';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error('Missing SUPABASE_URL/NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

async function readJson(req) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

function getToken(req, url, body) {
  const auth = req.headers.get('authorization') || '';
  const bearer = auth.toLowerCase().startsWith('bearer ') ? auth.slice(7) : '';
  return req.headers.get('x-monitor-token') || req.headers.get('x-sync-token') || bearer || url.searchParams.get('token') || body.token || '';
}

function intOption(value, fallback, min, max) {
  const parsed = Number.parseInt(String(value ?? ''), 10);
  if (!Number.isFinite(parsed)) return fallback;
  return Math.max(min, Math.min(max, parsed));
}

function checkTcp(host, port, timeoutMs) {
  return new Promise((resolve) => {
    const startedAt = Date.now();
    const socket = new net.Socket();
    let settled = false;

    const finish = (status, error = null) => {
      if (settled) return;
      settled = true;
      socket.destroy();
      resolve({
        status,
        response_time_ms: status === 'online' ? Date.now() - startedAt : null,
        error,
      });
    };

    socket.setTimeout(timeoutMs);
    socket.once('connect', () => finish('online'));
    socket.once('timeout', () => finish('offline', `Timed out after ${timeoutMs}ms`));
    socket.once('error', (error) => finish('offline', error.message));
    socket.connect(port, host);
  });
}

async function monitorServers(req) {
  const url = new URL(req.url);
  const body = await readJson(req);
  const expectedToken = process.env.MONITOR_TOKEN || process.env.SYNC_TOKEN || '';
  const providedToken = getToken(req, url, body);

  if (expectedToken && providedToken !== expectedToken) {
    return Response.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = getSupabaseAdmin();
  const limit = intOption(body.limit ?? url.searchParams.get('limit') ?? process.env.MONITOR_LIMIT, 50, 1, 500);
  const timeoutMs = intOption(body.timeoutMs ?? url.searchParams.get('timeoutMs') ?? process.env.MONITOR_TIMEOUT_MS, 5000, 1000, 30000);
  const serverId = body.serverId || url.searchParams.get('serverId');

  let query = supabase
    .from('servers')
    .select('id,name,ip,host,port,monitor_enabled')
    .eq('monitor_enabled', true)
    .order('last_monitor_checked_at', { ascending: true, nullsFirst: true })
    .limit(limit);

  if (serverId) {
    query = supabase
      .from('servers')
      .select('id,name,ip,host,port,monitor_enabled')
      .eq('id', serverId)
      .limit(1);
  }

  const { data: servers, error } = await query;
  if (error) throw error;

  const results = [];

  for (const server of servers || []) {
    const host = server.host || server.ip;
    const port = Number(server.port || 7171);
    const checkedAt = new Date().toISOString();
    const check = await checkTcp(host, port, timeoutMs);

    await supabase.from('server_uptime_checks').insert([
      {
        server_id: server.id,
        checked_at: checkedAt,
        status: check.status,
        response_time_ms: check.response_time_ms,
        error: check.error,
      },
    ]);

    await supabase
      .from('servers')
      .update({
        is_online: check.status === 'online',
        last_monitor_status: check.status,
        last_monitor_checked_at: checkedAt,
        last_response_time_ms: check.response_time_ms,
        last_check: checkedAt,
        updated_at: checkedAt,
      })
      .eq('id', server.id);

    results.push({
      server_id: server.id,
      name: server.name,
      host,
      port,
      ...check,
    });
  }

  return Response.json({
    success: true,
    checked: results.length,
    timeoutMs,
    results,
    timestamp: new Date().toISOString(),
  });
}

export async function GET(req) {
  try {
    return await monitorServers(req);
  } catch (error) {
    return Response.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    return await monitorServers(req);
  } catch (error) {
    return Response.json({ success: false, error: error instanceof Error ? error.message : String(error) }, { status: 500 });
  }
}
