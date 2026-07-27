import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-rubinot-private-server');
}

export default function WithReviewsRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-rubinot-private-server" />;
}
