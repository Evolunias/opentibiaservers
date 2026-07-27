import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-reviews-server-poland');
}

export default function EvoluniaWithReviewsServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-reviews-server-poland" />;
}
