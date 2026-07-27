import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-server-reviews');
}

export default function BaiakServerReviewsKeywordPage() {
  return <StaticKeywordPage slug="baiak-server-reviews" />;
}
