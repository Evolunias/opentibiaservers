import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-with-reviews-server-brazil');
}

export default function UnlineWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="unline-with-reviews-server-brazil" />;
}
