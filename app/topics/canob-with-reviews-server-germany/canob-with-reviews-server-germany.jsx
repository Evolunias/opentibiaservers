import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-reviews-server-germany');
}

export default function CanobWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="canob-with-reviews-server-germany" />;
}
