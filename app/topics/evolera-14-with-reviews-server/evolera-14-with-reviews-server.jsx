import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-with-reviews-server');
}

export default function Evolera14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-with-reviews-server" />;
}
