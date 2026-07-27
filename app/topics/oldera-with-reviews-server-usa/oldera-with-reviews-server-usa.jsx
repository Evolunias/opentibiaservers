import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-reviews-server-usa');
}

export default function OlderaWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-reviews-server-usa" />;
}
