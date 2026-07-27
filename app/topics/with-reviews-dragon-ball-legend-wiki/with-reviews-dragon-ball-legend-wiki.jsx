import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dragon-ball-legend-wiki');
}

export default function WithReviewsDragonBallLegendWikiKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dragon-ball-legend-wiki" />;
}
