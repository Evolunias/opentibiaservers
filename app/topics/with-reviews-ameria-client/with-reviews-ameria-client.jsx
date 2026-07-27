import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-client');
}

export default function WithReviewsAmeriaClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-client" />;
}
