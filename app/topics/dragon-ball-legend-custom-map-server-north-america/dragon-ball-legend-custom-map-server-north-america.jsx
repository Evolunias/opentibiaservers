import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-server-north-america');
}

export default function DragonBallLegendCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-server-north-america" />;
}
