import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-14-with-reviews-server');
}

export default function Canob14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="canob-14-with-reviews-server" />;
}
