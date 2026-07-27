import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-14-with-reviews-server');
}

export default function AureraGlobal14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-14-with-reviews-server" />;
}
