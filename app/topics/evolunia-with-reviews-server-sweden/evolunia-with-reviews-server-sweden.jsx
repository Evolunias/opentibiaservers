import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-reviews-server-sweden');
}

export default function EvoluniaWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-reviews-server-sweden" />;
}
