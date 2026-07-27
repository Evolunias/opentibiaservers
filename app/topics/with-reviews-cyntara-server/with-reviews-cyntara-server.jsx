import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-server');
}

export default function WithReviewsCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-server" />;
}
