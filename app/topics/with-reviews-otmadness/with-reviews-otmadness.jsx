import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness');
}

export default function WithReviewsOtmadnessKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness" />;
}
