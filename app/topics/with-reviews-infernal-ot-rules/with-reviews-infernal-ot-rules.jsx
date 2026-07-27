import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-infernal-ot-rules');
}

export default function WithReviewsInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-infernal-ot-rules" />;
}
