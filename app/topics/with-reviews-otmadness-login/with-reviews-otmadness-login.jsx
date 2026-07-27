import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-login');
}

export default function WithReviewsOtmadnessLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-login" />;
}
