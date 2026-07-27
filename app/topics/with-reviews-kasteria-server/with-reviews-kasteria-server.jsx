import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-server');
}

export default function WithReviewsKasteriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-server" />;
}
