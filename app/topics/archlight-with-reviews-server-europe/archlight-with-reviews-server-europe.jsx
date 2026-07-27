import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-with-reviews-server-europe');
}

export default function ArchlightWithReviewsServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-with-reviews-server-europe" />;
}
