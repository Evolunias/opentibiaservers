import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-with-trainers-server-north-america');
}

export default function DragonBallLegendWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-with-trainers-server-north-america" />;
}
