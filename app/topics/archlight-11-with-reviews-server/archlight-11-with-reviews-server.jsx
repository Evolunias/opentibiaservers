import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-11-with-reviews-server');
}

export default function Archlight11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-11-with-reviews-server" />;
}
