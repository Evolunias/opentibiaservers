import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-with-trainers-server-usa');
}

export default function DragonBallLegendWithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-with-trainers-server-usa" />;
}
