import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-reviews-server-europe');
}

export default function EvoluniaWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-reviews-server-europe" />;
}
