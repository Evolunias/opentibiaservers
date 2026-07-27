import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-0-with-reviews-server');
}

export default function Archlight80WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-0-with-reviews-server" />;
}
