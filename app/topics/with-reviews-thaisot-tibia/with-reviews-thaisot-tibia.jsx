import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-tibia');
}

export default function WithReviewsThaisotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-tibia" />;
}
