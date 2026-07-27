import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-online');
}

export default function WithReviewsNtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-online" />;
}
