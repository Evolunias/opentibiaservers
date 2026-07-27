import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-reviews-server-north-america');
}

export default function CanobWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-with-reviews-server-north-america" />;
}
