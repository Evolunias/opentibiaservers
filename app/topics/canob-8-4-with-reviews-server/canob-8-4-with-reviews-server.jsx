import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-4-with-reviews-server');
}

export default function Canob84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-4-with-reviews-server" />;
}
