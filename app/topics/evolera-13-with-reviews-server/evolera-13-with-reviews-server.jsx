import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-with-reviews-server');
}

export default function Evolera13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-with-reviews-server" />;
}
