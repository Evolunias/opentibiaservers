import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dragon-ball-legend-forum');
}

export default function WithReviewsDragonBallLegendForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dragon-ball-legend-forum" />;
}
