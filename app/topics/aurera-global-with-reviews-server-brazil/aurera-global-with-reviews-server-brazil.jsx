import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-with-reviews-server-brazil');
}

export default function AureraGlobalWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-with-reviews-server-brazil" />;
}
