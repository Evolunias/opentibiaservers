import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-servers-germany');
}

export default function DragonBallLegendCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-servers-germany" />;
}
