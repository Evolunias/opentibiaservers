import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-kasteria-private-server');
}

export default function WithReviewsKasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-kasteria-private-server" />;
}
