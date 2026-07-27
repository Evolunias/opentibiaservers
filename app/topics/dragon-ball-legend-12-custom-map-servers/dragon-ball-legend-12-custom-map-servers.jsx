import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-12-custom-map-servers');
}

export default function DragonBallLegend12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-12-custom-map-servers" />;
}
