import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-12-with-reviews-server');
}

export default function Archlight12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-12-with-reviews-server" />;
}
