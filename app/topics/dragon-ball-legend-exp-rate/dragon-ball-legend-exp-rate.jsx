import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-exp-rate');
}

export default function DragonBallLegendExpRateKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-exp-rate" />;
}
