import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-1-with-reviews-server');
}

export default function Archlight71WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-1-with-reviews-server" />;
}
