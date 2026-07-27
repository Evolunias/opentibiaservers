import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-ot');
}

export default function WithReviewsNtoStarOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-ot" />;
}
