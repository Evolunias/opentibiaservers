import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-0-with-reviews-server');
}

export default function Canob100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-0-with-reviews-server" />;
}
