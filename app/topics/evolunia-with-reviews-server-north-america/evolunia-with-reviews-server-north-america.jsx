import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-reviews-server-north-america');
}

export default function EvoluniaWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-reviews-server-north-america" />;
}
