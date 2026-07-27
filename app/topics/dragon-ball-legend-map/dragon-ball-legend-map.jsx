import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-map');
}

export default function DragonBallLegendMapKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-map" />;
}
