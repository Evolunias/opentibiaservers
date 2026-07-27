import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-reviews-server-brazil');
}

export default function CanobWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="canob-with-reviews-server-brazil" />;
}
