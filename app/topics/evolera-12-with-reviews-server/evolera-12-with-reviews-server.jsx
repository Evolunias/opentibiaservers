import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-with-reviews-server');
}

export default function Evolera12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-with-reviews-server" />;
}
