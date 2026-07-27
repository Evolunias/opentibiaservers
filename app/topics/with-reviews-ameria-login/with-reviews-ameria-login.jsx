import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-ameria-login');
}

export default function WithReviewsAmeriaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-ameria-login" />;
}
