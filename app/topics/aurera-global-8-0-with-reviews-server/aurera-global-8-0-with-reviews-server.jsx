import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-8-0-with-reviews-server');
}

export default function AureraGlobal80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-8-0-with-reviews-server" />;
}
