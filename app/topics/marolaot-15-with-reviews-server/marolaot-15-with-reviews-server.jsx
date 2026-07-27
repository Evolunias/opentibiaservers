import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-with-reviews-server');
}

export default function Marolaot15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-with-reviews-server" />;
}
