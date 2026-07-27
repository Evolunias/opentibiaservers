import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-13-with-reviews-server');
}

export default function Archlight13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-13-with-reviews-server" />;
}
