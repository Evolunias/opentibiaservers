import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-0-with-reviews-server');
}

export default function Marolaot80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-0-with-reviews-server" />;
}
