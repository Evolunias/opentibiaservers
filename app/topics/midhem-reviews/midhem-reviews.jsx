import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-reviews');
}

export default function MidhemReviewsKeywordPage() {
  return <StaticKeywordPage slug="midhem-reviews" />;
}
