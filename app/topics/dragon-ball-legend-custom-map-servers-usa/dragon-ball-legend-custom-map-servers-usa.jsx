import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-servers-usa');
}

export default function DragonBallLegendCustomMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-servers-usa" />;
}
