import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-6-with-reviews-server');
}

export default function Evolera86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-6-with-reviews-server" />;
}
