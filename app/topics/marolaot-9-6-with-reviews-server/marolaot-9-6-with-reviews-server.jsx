import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-9-6-with-reviews-server');
}

export default function Marolaot96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-9-6-with-reviews-server" />;
}
