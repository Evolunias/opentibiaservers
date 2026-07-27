import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-classick-drakoria-online');
}

export default function WithReviewsClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-classick-drakoria-online" />;
}
