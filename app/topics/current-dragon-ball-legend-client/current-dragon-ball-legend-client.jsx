import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-dragon-ball-legend-client');
}

export default function CurrentDragonBallLegendClientKeywordPage() {
  return <StaticKeywordPage slug="current-dragon-ball-legend-client" />;
}
