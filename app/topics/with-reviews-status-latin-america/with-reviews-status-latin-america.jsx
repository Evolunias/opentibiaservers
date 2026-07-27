import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-status-latin-america');
}

export default function WithReviewsStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-status-latin-america" />;
}
