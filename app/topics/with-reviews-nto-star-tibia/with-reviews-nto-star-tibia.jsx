import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-tibia');
}

export default function WithReviewsNtoStarTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-tibia" />;
}
