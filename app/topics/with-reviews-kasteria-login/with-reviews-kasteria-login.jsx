import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-login');
}

export default function WithReviewsKasteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-login" />;
}
