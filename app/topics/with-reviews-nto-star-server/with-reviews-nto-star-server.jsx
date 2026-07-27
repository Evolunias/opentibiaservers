import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-server');
}

export default function WithReviewsNtoStarServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-server" />;
}
