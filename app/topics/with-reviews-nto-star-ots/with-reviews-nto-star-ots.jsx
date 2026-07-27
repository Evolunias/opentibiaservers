import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-ots');
}

export default function WithReviewsNtoStarOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-ots" />;
}
