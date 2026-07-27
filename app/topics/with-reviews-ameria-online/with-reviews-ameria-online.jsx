import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-online');
}

export default function WithReviewsAmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-online" />;
}
