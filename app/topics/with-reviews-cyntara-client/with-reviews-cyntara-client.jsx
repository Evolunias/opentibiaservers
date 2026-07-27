import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-client');
}

export default function WithReviewsCyntaraClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-client" />;
}
