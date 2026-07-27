import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-with-trainers-server-europe');
}

export default function DragonBallLegendWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-with-trainers-server-europe" />;
}
