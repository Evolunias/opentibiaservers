import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-dragon-ball-legend-client');
}

export default function BestDragonBallLegendClientKeywordPage() {
  return <StaticKeywordPage slug="best-dragon-ball-legend-client" />;
}
