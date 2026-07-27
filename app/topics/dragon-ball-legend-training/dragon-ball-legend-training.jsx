import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-training');
}

export default function DragonBallLegendTrainingKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-training" />;
}
