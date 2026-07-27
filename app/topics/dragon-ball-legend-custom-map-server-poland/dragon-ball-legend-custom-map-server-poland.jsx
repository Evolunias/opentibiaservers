import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-custom-map-server-poland');
}

export default function DragonBallLegendCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-custom-map-server-poland" />;
}
