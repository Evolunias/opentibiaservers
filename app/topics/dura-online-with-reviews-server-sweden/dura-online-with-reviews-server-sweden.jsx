import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-with-reviews-server-sweden');
}

export default function DuraOnlineWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="dura-online-with-reviews-server-sweden" />;
}
