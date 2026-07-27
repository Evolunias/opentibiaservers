import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-calmera-ot-tibia');
}

export default function WithReviewsCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-calmera-ot-tibia" />;
}
