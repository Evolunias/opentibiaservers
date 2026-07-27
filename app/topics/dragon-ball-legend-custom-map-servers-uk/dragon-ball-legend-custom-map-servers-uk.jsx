import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-servers-uk');
}

export default function DragonBallLegendCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-servers-uk" />;
}
