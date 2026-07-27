import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-reviews-server-latin-america');
}

export default function MarolaotWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-reviews-server-latin-america" />;
}
