import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-private-server');
}

export default function WithReviewsCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-private-server" />;
}
