import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-4-with-reviews-server');
}

export default function AureraGlobal84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-4-with-reviews-server" />;
}
