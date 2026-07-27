import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-reviews-server-argentina');
}

export default function EvoluniaWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-reviews-server-argentina" />;
}
