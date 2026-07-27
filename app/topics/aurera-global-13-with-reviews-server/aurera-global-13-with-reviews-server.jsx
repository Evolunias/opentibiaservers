import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-13-with-reviews-server');
}

export default function AureraGlobal13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-13-with-reviews-server" />;
}
