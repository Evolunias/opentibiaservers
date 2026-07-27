import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-reviews-server-north-america');
}

export default function MarolaotWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-reviews-server-north-america" />;
}
