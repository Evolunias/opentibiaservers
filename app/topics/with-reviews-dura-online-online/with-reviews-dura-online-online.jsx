import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-dura-online-online');
}

export default function WithReviewsDuraOnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-dura-online-online" />;
}
