import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-infernal-ot-guide');
}

export default function WithReviewsInfernalOtGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-infernal-ot-guide" />;
}
