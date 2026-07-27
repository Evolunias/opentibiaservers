import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-open-tibia');
}

export default function WithReviewsRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-open-tibia" />;
}
