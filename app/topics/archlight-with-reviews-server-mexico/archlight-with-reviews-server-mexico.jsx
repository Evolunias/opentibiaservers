import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-reviews-server-mexico');
}

export default function ArchlightWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-reviews-server-mexico" />;
}
