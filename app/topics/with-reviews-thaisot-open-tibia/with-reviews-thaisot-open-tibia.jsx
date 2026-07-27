import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-thaisot-open-tibia');
}

export default function WithReviewsThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-thaisot-open-tibia" />;
}
