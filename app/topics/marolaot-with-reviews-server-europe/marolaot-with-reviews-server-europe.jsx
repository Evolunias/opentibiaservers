import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-with-reviews-server-europe');
}

export default function MarolaotWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="marolaot-with-reviews-server-europe" />;
}
