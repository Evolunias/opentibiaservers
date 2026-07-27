import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-reviews-server-europe');
}

export default function CanobWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="canob-with-reviews-server-europe" />;
}
