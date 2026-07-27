import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-online');
}

export default function WithReviewsRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-online" />;
}
