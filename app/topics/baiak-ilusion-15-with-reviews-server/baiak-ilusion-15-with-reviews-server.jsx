import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-15-with-reviews-server');
}

export default function BaiakIlusion15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-15-with-reviews-server" />;
}
