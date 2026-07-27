import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-client');
}

export default function WithReviewsKasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-client" />;
}
