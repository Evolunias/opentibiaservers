import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-6-with-reviews-server');
}

export default function AureraGlobal86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-6-with-reviews-server" />;
}
