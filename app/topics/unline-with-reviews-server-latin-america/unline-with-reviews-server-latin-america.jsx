import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-reviews-server-latin-america');
}

export default function UnlineWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-with-reviews-server-latin-america" />;
}
