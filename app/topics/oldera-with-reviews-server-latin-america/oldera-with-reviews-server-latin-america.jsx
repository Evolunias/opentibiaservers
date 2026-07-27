import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-with-reviews-server-latin-america');
}

export default function OlderaWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-with-reviews-server-latin-america" />;
}
