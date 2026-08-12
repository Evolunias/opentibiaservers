export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json(
    {
      success: false,
      error: 'Automatic enrichment is disabled. Update listings manually on request.',
    },
    { status: 410 }
  );
}

export async function POST() {
  return Response.json(
    {
      success: false,
      error: 'Automatic enrichment is disabled. Update listings manually on request.',
    },
    { status: 410 }
  );
}
