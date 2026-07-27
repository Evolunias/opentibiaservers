import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-reviews-server-brazil');
}

export default function OlderaWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-reviews-server-brazil" />;
}
