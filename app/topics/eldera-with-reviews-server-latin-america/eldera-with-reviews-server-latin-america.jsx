import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-reviews-server-latin-america');
}

export default function ElderaWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-reviews-server-latin-america" />;
}
