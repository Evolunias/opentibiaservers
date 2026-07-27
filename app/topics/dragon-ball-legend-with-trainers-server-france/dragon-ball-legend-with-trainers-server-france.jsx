import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-with-trainers-server-france');
}

export default function DragonBallLegendWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-with-trainers-server-france" />;
}
