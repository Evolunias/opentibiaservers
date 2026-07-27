import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-6-with-reviews-server');
}

export default function Marolaot86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-6-with-reviews-server" />;
}
