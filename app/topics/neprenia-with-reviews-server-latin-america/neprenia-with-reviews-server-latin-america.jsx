import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-with-reviews-server-latin-america');
}

export default function NepreniaWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-with-reviews-server-latin-america" />;
}
