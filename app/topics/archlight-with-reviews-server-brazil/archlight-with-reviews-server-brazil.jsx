import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-reviews-server-brazil');
}

export default function ArchlightWithReviewsServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-reviews-server-brazil" />;
}
