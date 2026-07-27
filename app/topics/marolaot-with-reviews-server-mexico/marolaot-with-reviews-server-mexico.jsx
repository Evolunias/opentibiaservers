import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-reviews-server-mexico');
}

export default function MarolaotWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-reviews-server-mexico" />;
}
