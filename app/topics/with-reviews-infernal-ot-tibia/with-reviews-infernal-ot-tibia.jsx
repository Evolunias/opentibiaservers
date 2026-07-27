import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-infernal-ot-tibia');
}

export default function WithReviewsInfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-infernal-ot-tibia" />;
}
