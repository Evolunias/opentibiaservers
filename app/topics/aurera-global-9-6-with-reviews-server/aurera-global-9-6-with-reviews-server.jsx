import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-9-6-with-reviews-server');
}

export default function AureraGlobal96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-9-6-with-reviews-server" />;
}
