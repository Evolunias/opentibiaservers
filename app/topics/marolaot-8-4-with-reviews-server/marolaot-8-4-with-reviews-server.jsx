import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-4-with-reviews-server');
}

export default function Marolaot84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-4-with-reviews-server" />;
}
