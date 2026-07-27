import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-reviews-server-canada');
}

export default function EvoluniaWithReviewsServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-reviews-server-canada" />;
}
