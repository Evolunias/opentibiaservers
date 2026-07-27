import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-reviews-server-latin-america');
}

export default function TibiameWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-reviews-server-latin-america" />;
}
