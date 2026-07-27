import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-private-server');
}

export default function WithReviewsOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-private-server" />;
}
