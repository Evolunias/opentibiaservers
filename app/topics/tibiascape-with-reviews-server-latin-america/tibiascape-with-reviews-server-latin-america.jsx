import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-with-reviews-server-latin-america');
}

export default function TibiascapeWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-with-reviews-server-latin-america" />;
}
