import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-guide');
}

export default function WithReviewsOtmadnessGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-guide" />;
}
