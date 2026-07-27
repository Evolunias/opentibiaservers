import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-1-with-reviews-server');
}

export default function Evolera71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-1-with-reviews-server" />;
}
