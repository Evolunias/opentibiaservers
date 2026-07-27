import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-11-with-reviews-server');
}

export default function Evolera11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-11-with-reviews-server" />;
}
