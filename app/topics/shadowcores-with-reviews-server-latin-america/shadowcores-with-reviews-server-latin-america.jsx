import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-with-reviews-server-latin-america');
}

export default function ShadowcoresWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-with-reviews-server-latin-america" />;
}
