import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-with-reviews-server-latin-america');
}

export default function NtoStarWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nto-star-with-reviews-server-latin-america" />;
}
