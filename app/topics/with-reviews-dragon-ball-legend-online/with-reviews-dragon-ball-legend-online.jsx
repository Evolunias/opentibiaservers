import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dragon-ball-legend-online');
}

export default function WithReviewsDragonBallLegendOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dragon-ball-legend-online" />;
}
