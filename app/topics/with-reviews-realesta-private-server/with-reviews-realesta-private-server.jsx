import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realesta-private-server');
}

export default function WithReviewsRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realesta-private-server" />;
}
