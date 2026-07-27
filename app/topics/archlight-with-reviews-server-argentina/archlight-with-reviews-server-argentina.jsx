import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-reviews-server-argentina');
}

export default function ArchlightWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-reviews-server-argentina" />;
}
