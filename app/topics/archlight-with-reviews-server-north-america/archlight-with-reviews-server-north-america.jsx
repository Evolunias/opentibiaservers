import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-reviews-server-north-america');
}

export default function ArchlightWithReviewsServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-reviews-server-north-america" />;
}
