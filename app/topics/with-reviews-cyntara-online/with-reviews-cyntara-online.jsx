import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-online');
}

export default function WithReviewsCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-online" />;
}
