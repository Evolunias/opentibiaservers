import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-online');
}

export default function WithReviewsOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-online" />;
}
