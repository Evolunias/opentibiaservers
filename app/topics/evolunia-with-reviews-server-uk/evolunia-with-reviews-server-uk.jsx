import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-reviews-server-uk');
}

export default function EvoluniaWithReviewsServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-reviews-server-uk" />;
}
