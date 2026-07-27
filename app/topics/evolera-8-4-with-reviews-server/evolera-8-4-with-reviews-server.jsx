import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-4-with-reviews-server');
}

export default function Evolera84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-4-with-reviews-server" />;
}
