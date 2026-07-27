import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-private-server');
}

export default function OfficialDragonBallLegendPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-private-server" />;
}
