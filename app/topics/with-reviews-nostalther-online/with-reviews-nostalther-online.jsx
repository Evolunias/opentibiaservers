import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nostalther-online');
}

export default function WithReviewsNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nostalther-online" />;
}
