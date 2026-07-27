import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-nto-star-client');
}

export default function WithReviewsNtoStarClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-nto-star-client" />;
}
