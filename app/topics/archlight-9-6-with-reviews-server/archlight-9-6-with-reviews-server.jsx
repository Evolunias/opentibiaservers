import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-9-6-with-reviews-server');
}

export default function Archlight96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-9-6-with-reviews-server" />;
}
