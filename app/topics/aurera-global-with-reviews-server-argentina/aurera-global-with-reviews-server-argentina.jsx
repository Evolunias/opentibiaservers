import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-reviews-server-argentina');
}

export default function AureraGlobalWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-reviews-server-argentina" />;
}
