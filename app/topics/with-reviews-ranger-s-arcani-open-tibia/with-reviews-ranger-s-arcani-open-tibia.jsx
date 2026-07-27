import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ranger-s-arcani-open-tibia');
}

export default function WithReviewsRangerSArcaniOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ranger-s-arcani-open-tibia" />;
}
