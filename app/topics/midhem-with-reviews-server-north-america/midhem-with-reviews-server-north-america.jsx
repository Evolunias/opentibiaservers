import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-reviews-server-north-america');
}

export default function MidhemWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-reviews-server-north-america" />;
}
