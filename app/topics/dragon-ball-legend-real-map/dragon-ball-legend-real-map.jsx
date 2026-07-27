import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-real-map');
}

export default function DragonBallLegendRealMapKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-real-map" />;
}
