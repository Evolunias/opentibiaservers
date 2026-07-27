import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-servers-poland');
}

export default function DragonBallLegendCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-servers-poland" />;
}
