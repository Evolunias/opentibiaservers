import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend-server');
}

export default function LowrateDragonBallLegendServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend-server" />;
}
