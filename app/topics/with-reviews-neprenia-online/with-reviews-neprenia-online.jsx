import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-neprenia-online');
}

export default function WithReviewsNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-neprenia-online" />;
}
