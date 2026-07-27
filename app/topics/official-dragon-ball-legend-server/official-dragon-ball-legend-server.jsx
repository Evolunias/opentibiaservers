import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-dragon-ball-legend-server');
}

export default function OfficialDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="official-dragon-ball-legend-server" />;
}
