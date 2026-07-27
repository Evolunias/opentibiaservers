import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-with-trainers-server-uk');
}

export default function DragonBallLegendWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-with-trainers-server-uk" />;
}
