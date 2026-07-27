import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-realera-private-server');
}

export default function WithReviewsRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-realera-private-server" />;
}
