import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-reviews-server-brazil');
}

export default function EvoluniaWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-reviews-server-brazil" />;
}
