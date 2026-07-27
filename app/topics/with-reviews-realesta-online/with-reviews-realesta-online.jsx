import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-online');
}

export default function WithReviewsRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-online" />;
}
