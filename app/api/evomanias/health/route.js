import pool from '@/lib/aiven';

export async function GET(req) {
  try {
    const conn = await pool.getConnection();
    const [result] = await conn.execute('SELECT 1');
    conn.release();
    
    return Response.json({
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString()
    }, { status: 200 });
  } catch (error) {
    console.error('[health] Connection error:', error.message, error.code);
    return Response.json({
      status: 'unhealthy',
      database: 'disconnected',
      error: error.message,
      code: error.code,
      timestamp: new Date().toISOString()
    }, { status: 503 });
  }
}
