import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-reviews-server-brazil');
}

export default function MidhemWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-reviews-server-brazil" />;
}
