import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-with-reviews-server-latin-america');
}

export default function AlasteraWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="alastera-with-reviews-server-latin-america" />;
}
