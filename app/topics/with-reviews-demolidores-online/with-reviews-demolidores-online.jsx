import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-demolidores-online');
}

export default function WithReviewsDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-demolidores-online" />;
}
