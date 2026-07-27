import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-8-6-with-reviews-server');
}

export default function BaiakIlusion86WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-8-6-with-reviews-server" />;
}
