import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-11-with-reviews-server');
}

export default function AureraGlobal11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-11-with-reviews-server" />;
}
