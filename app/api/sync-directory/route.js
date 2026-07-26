export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function copyHeaders(req) {
  return {
    'content-type': 'application/json',
    'x-sync-token': req.headers.get('x-sync-token') || '',
    'x-monitor-token': req.headers.get('x-monitor-token') || req.headers.get('x-sync-token') || '',
    authorization: req.headers.get('authorization') || '',
  };
}

async function readJson(req) {
  try {
    return await req.json();
  } catch {
    return {};
  }
}

async function callInternalApi(req, path, payload) {
  const baseUrl = new URL(req.url).origin;
  const response = await fetch(`${baseUrl}${path}`, {
    method: 'POST',
    headers: copyHeaders(req),
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  const data = await response.json().catch(() => ({
    success: false,
    error: `Failed to parse response from ${path}`,
  }));

  return {
    ok: response.ok,
    status: response.status,
    data,
  };
}

export async function POST(req) {
  const body = await readJson(req);

  const syncPayload = {
    pageLimit: body.pageLimit ?? 4,
    includeDetails: body.includeDetails ?? true,
    detailLimit: body.detailLimit ?? 100,
    officialResearchLimit: body.officialResearchLimit ?? 25,
    fetchMode: body.fetchMode,
    renderJs: body.renderJs,
    premiumProxy: body.premiumProxy,
    countryCode: body.countryCode,
  };
  const enrichPayload = {
    limit: body.enrichLimit ?? 100,
    timeoutMs: body.enrichTimeoutMs ?? 15000,
  };
  const monitorPayload = {
    limit: body.monitorLimit ?? 100,
    timeoutMs: body.monitorTimeoutMs ?? 5000,
  };

  const syncResult = await callInternalApi(req, '/api/sync-servers', syncPayload);
  if (!syncResult.ok) {
    return Response.json(
      {
        success: false,
        stage: 'sync',
        sync: syncResult.data,
      },
      { status: syncResult.status || 500 }
    );
  }

  const enrichResult = await callInternalApi(req, '/api/enrich-servers', enrichPayload);
  const monitorResult = await callInternalApi(req, '/api/monitor-servers', monitorPayload);

  const success = syncResult.ok && enrichResult.ok && monitorResult.ok;

  return Response.json(
    {
      success,
      timestamp: new Date().toISOString(),
      sync: syncResult.data,
      enrich: enrichResult.data,
      monitor: monitorResult.data,
    },
    { status: success ? 200 : 500 }
  );
}
