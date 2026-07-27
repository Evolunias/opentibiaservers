import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-reviews-server-poland');
}

export default function MidhemWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-reviews-server-poland" />;
}
