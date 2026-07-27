import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-with-reviews-server-argentina');
}

export default function MidhemWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-with-reviews-server-argentina" />;
}
