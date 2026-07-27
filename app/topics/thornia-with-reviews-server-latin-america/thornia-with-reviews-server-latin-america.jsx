import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-with-reviews-server-latin-america');
}

export default function ThorniaWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-with-reviews-server-latin-america" />;
}
