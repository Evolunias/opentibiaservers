import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-with-reviews-server');
}

export default function Canob13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="canob-13-with-reviews-server" />;
}
