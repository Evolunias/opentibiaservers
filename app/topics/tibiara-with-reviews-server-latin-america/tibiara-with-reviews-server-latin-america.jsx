import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-reviews-server-latin-america');
}

export default function TibiaraWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-reviews-server-latin-america" />;
}
