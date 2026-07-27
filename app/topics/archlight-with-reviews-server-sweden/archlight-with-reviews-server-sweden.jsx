import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-reviews-server-sweden');
}

export default function ArchlightWithReviewsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-reviews-server-sweden" />;
}
