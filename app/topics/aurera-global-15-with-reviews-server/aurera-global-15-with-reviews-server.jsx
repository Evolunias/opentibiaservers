import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-15-with-reviews-server');
}

export default function AureraGlobal15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-15-with-reviews-server" />;
}
