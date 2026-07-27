import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-infernal-ot-ots');
}

export default function WithReviewsInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-infernal-ot-ots" />;
}
