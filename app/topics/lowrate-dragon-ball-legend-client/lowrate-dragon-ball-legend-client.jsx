import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-dragon-ball-legend-client');
}

export default function LowrateDragonBallLegendClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-dragon-ball-legend-client" />;
}
