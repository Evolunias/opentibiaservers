import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-4-with-reviews-server');
}

export default function Marolaot74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-4-with-reviews-server" />;
}
