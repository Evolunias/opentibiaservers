import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-reviews-server-argentina');
}

export default function DuraOnlineWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-reviews-server-argentina" />;
}
