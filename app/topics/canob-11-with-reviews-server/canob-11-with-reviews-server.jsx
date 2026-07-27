import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-with-reviews-server');
}

export default function Canob11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-with-reviews-server" />;
}
