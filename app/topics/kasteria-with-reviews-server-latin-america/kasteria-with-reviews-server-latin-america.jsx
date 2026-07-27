import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-reviews-server-latin-america');
}

export default function KasteriaWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-reviews-server-latin-america" />;
}
