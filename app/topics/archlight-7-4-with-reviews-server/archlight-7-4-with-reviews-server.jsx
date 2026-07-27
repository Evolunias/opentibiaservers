import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-7-4-with-reviews-server');
}

export default function Archlight74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-7-4-with-reviews-server" />;
}
