import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-online');
}

export default function WithReviewsOxygenotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-online" />;
}
