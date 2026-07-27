import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-reviews-server-latin-america');
}

export default function EvoluniaWithReviewsServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-reviews-server-latin-america" />;
}
