import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-open-tibia');
}

export default function WithReviewsRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-open-tibia" />;
}
