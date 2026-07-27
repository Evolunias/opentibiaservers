import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-servers-europe');
}

export default function DragonBallLegendCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-servers-europe" />;
}
