import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-9-6-with-reviews-server');
}

export default function Evolera96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-9-6-with-reviews-server" />;
}
