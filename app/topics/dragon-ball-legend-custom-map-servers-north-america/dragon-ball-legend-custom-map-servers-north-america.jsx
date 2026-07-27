import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-servers-north-america');
}

export default function DragonBallLegendCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-servers-north-america" />;
}
