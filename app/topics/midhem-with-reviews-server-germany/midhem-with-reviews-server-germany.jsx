import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-reviews-server-germany');
}

export default function MidhemWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-reviews-server-germany" />;
}
