import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-with-reviews-server');
}

export default function Canob96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-with-reviews-server" />;
}
