import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-7-4-with-reviews-server');
}

export default function BaiakIlusion74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-7-4-with-reviews-server" />;
}
