import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-reviews-server-usa');
}

export default function EvoluniaWithReviewsServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-reviews-server-usa" />;
}
