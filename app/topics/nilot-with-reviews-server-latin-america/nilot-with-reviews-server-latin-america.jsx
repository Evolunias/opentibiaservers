import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-with-reviews-server-latin-america');
}

export default function NilotWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="nilot-with-reviews-server-latin-america" />;
}
