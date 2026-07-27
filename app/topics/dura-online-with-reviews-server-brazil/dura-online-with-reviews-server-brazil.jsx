import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-reviews-server-brazil');
}

export default function DuraOnlineWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-reviews-server-brazil" />;
}
