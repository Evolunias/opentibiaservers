import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-reviews-server-brazil');
}

export default function MarolaotWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-reviews-server-brazil" />;
}
