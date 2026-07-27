import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-server-south-america');
}

export default function DragonBallLegendCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-server-south-america" />;
}
