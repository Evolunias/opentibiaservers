import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-real-map-server-north-america');
}

export default function DragonBallLegendRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-real-map-server-north-america" />;
}
