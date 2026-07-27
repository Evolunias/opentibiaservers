import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-with-reviews-server-latin-america');
}

export default function MiracleWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-with-reviews-server-latin-america" />;
}
