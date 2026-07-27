import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-reviews-server-uk');
}

export default function CanobWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="canob-with-reviews-server-uk" />;
}
