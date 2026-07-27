import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-6-with-reviews-server');
}

export default function Canob76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-6-with-reviews-server" />;
}
