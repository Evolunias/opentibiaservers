import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-with-reviews-server-mexico');
}

export default function CanobWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="canob-with-reviews-server-mexico" />;
}
