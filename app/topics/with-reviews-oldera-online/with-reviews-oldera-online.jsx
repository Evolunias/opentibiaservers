import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-online');
}

export default function WithReviewsOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-online" />;
}
