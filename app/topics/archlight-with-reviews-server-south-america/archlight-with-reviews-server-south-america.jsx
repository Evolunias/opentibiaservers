import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-reviews-server-south-america');
}

export default function ArchlightWithReviewsServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-reviews-server-south-america" />;
}
