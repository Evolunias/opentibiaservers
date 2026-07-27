import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-dragon-ball-legend-client');
}

export default function PopularDragonBallLegendClientKeywordPage() {
  return <StaticKeywordPage slug="popular-dragon-ball-legend-client" />;
}
