import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-oldera-login');
}

export default function WithReviewsOlderaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-oldera-login" />;
}
