import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-14-with-reviews-server');
}

export default function BaiakIlusion14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-14-with-reviews-server" />;
}
