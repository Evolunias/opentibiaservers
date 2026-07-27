import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-with-reviews-server');
}

export default function Marolaot11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-with-reviews-server" />;
}
