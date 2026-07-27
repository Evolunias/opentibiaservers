import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-7-1-with-reviews-server');
}

export default function AureraGlobal71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-7-1-with-reviews-server" />;
}
