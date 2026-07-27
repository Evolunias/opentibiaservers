import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-with-reviews-server-argentina');
}

export default function ThaisotWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-with-reviews-server-argentina" />;
}
