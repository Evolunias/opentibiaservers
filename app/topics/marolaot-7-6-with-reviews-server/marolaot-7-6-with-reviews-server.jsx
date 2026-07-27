import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-6-with-reviews-server');
}

export default function Marolaot76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-6-with-reviews-server" />;
}
