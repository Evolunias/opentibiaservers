import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-10-98-with-reviews-server');
}

export default function Canob1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="canob-10-98-with-reviews-server" />;
}
