import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-reviews-server-usa');
}

export default function CanobWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-reviews-server-usa" />;
}
