import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-reviews-server-germany');
}

export default function EvoluniaWithReviewsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-reviews-server-germany" />;
}
