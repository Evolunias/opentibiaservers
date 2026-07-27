import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-harmonia-ot-rules');
}

export default function WithReviewsHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-harmonia-ot-rules" />;
}
