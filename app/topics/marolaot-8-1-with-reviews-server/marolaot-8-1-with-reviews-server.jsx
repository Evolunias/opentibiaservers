import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-1-with-reviews-server');
}

export default function Marolaot81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-1-with-reviews-server" />;
}
