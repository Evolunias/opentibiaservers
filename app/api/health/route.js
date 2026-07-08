import { createClient } from '@supabase/supabase-js';

function firstNonEmpty(values = []) {
  return values.find((value) => typeof value === 'string' && value.trim())?.trim() || '';
}

function isValidUrl(value) {
  if (!value) return false;

  try {
    const url = new URL(value);
    return Boolean(url.protocol && url.hostname);
  } catch {
    return false;
  }
}

export async function GET() {
  const supabaseUrl = firstNonEmpty([
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_SUPABASE_DB_URL,
    process.env.PROJECT_URL,
    process.env.SUPABASE_URL,
  ]);
  const supabaseKey = firstNonEmpty([
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    process.env.NEXT_SUPABASE_KEY,
    process.env.PUBLISHABLE_KEY,
    process.env.SUPABASE_ANON_KEY,
  ]);

  const result = {
    ok: false,
    checked_at: new Date().toISOString(),
    env: {
      has_url: Boolean(supabaseUrl),
      has_publishable_key: Boolean(supabaseKey),
      url: supabaseUrl || null,
      url_valid: isValidUrl(supabaseUrl),
    },
    database: {
      reachable: false,
      servers_table: false,
      sync_logs_table: false,
    },
  };

  if (!supabaseUrl || !supabaseKey || !isValidUrl(supabaseUrl)) {
    return Response.json(result, { status: 500 });
  }

  const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  try {
    const { error: serversError } = await supabase.from('servers').select('id', { count: 'exact', head: true });
    result.database.reachable = true;
    result.database.servers_table = !serversError;

    const { error: syncLogsError } = await supabase.from('sync_logs').select('id', { count: 'exact', head: true });
    result.database.sync_logs_table = !syncLogsError;

    result.ok = result.database.servers_table;
    if (serversError) result.database.servers_error = serversError.message;
    if (syncLogsError) result.database.sync_logs_error = syncLogsError.message;

    return Response.json(result, { status: result.ok ? 200 : 500 });
  } catch (error) {
    result.database.error = error instanceof Error ? error.message : String(error);
    return Response.json(result, { status: 500 });
  }
}
