import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-ot-server');
}

export default function WithReviewsNtoStarOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-ot-server" />;
}
