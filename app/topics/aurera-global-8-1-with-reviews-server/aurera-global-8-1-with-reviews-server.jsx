import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-1-with-reviews-server');
}

export default function AureraGlobal81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-1-with-reviews-server" />;
}
