import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-client');
}

export default function WithReviewsOtmadnessClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-client" />;
}
