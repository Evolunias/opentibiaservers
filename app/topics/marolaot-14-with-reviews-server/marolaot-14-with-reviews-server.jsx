import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-with-reviews-server');
}

export default function Marolaot14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-with-reviews-server" />;
}
