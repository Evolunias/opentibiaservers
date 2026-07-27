import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-reviews-server-mexico');
}

export default function MidhemWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-reviews-server-mexico" />;
}
