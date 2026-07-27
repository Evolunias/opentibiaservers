import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-medivia-private-server');
}

export default function WithReviewsMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-medivia-private-server" />;
}
