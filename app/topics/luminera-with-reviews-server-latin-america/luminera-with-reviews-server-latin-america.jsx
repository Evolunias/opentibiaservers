import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-with-reviews-server-latin-america');
}

export default function LumineraWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-with-reviews-server-latin-america" />;
}
