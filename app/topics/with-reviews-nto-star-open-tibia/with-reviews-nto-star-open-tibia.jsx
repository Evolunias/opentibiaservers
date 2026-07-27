import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-open-tibia');
}

export default function WithReviewsNtoStarOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-open-tibia" />;
}
