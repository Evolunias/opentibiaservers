import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-infernal-ot-open-tibia');
}

export default function WithReviewsInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-infernal-ot-open-tibia" />;
}
