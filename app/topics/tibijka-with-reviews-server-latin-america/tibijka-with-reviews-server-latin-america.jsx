import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-with-reviews-server-latin-america');
}

export default function TibijkaWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibijka-with-reviews-server-latin-america" />;
}
