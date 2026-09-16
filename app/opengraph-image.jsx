import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'OpenTibiaServers.com ? Open Tibia server directory';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background:
            'linear-gradient(145deg, #020617 0%, #0f172a 48%, #064e3b 100%)',
          color: '#f8fafc',
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: 24,
              background: 'linear-gradient(135deg, #a7f3d0, #34d399)',
              color: '#022c22',
            }}
          >
            OTS
          </div>
          <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em' }}>
            OpenTibiaServers.com
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.04em', maxWidth: 980 }}>
            Rank Open Tibia servers by peak players, ratings, and votes
          </div>
          <div style={{ fontSize: 28, color: '#cbd5e1', maxWidth: 920, lineHeight: 1.35 }}>
            Compare OT worlds with live directory data, reviews, uptime signals, and owner-managed profiles.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, fontSize: 20, color: '#a7f3d0', fontWeight: 700 }}>
          <span>Peak rankings</span>
          <span>?</span>
          <span>Reviews</span>
          <span>?</span>
          <span>Daily votes</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
