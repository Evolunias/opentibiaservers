import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-14-custom-map-servers');
}

export default function DragonBallLegend14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-14-custom-map-servers" />;
}
