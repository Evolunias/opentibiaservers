import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-otmadness-tibia');
}

export default function WithReviewsOtmadnessTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-otmadness-tibia" />;
}
