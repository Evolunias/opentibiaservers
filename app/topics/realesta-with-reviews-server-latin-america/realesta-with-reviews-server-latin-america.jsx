import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-with-reviews-server-latin-america');
}

export default function RealestaWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-with-reviews-server-latin-america" />;
}
