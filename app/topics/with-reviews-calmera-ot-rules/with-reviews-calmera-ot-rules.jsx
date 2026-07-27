import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-calmera-ot-rules');
}

export default function WithReviewsCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-calmera-ot-rules" />;
}
