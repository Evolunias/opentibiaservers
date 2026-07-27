import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-reviews-server-poland');
}

export default function CanobWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="canob-with-reviews-server-poland" />;
}
