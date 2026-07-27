import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-7-6-with-reviews-server');
}

export default function BaiakIlusion76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-7-6-with-reviews-server" />;
}
