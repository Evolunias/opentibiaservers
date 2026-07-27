import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-online');
}

export default function WithReviewsRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-online" />;
}
