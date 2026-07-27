import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-with-reviews-server-mexico');
}

export default function EvoluniaWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolunia-with-reviews-server-mexico" />;
}
