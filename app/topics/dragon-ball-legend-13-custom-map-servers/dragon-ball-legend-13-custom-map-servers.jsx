import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-13-custom-map-servers');
}

export default function DragonBallLegend13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-13-custom-map-servers" />;
}
