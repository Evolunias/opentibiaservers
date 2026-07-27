import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-reviews-server-latin-america');
}

export default function MidhemWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-reviews-server-latin-america" />;
}
