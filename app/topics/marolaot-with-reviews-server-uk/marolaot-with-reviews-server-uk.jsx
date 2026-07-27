import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-reviews-server-uk');
}

export default function MarolaotWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-reviews-server-uk" />;
}
