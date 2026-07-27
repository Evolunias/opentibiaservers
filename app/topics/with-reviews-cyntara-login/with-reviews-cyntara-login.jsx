import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-cyntara-login');
}

export default function WithReviewsCyntaraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-cyntara-login" />;
}
