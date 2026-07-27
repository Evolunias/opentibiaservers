import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-reviews-server-usa');
}

export default function MarolaotWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-reviews-server-usa" />;
}
