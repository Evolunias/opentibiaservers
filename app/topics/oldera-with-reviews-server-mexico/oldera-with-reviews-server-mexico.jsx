import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-reviews-server-mexico');
}

export default function OlderaWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-reviews-server-mexico" />;
}
