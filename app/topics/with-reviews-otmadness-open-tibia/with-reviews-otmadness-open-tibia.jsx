import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-open-tibia');
}

export default function WithReviewsOtmadnessOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-open-tibia" />;
}
