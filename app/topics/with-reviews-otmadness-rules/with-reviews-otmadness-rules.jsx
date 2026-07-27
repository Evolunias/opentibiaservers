import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-rules');
}

export default function WithReviewsOtmadnessRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-rules" />;
}
