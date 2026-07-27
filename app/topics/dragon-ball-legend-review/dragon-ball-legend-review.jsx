import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dragon-ball-legend-review');
}

export default function DragonBallLegendReviewKeywordPage() {
  return <StaticKeywordPage slug="dragon-ball-legend-review" />;
}
