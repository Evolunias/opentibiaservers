import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oxygenot-private-server');
}

export default function WithReviewsOxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oxygenot-private-server" />;
}
