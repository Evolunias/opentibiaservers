import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-servers-latin-america');
}

export default function DragonBallLegendCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-servers-latin-america" />;
}
