import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-1-with-reviews-server');
}

export default function Evolera81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-1-with-reviews-server" />;
}
