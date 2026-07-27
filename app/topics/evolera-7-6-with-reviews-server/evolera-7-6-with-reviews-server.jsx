import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-6-with-reviews-server');
}

export default function Evolera76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-6-with-reviews-server" />;
}
