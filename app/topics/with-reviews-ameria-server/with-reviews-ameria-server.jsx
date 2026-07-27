import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-server');
}

export default function WithReviewsAmeriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-server" />;
}
