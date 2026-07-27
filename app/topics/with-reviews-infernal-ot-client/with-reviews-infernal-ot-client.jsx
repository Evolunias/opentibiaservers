import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-infernal-ot-client');
}

export default function WithReviewsInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-infernal-ot-client" />;
}
