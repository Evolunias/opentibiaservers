import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-10-98-with-reviews-server');
}

export default function Archlight1098WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-10-98-with-reviews-server" />;
}
