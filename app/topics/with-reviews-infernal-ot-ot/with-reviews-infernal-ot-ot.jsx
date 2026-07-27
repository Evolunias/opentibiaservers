import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-infernal-ot-ot');
}

export default function WithReviewsInfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-infernal-ot-ot" />;
}
