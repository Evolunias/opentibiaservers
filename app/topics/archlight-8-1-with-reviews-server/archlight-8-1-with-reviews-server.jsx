import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-8-1-with-reviews-server');
}

export default function Archlight81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-8-1-with-reviews-server" />;
}
