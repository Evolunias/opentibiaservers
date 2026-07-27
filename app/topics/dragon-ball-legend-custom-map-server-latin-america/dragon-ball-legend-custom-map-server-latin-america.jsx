import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-server-latin-america');
}

export default function DragonBallLegendCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-server-latin-america" />;
}
