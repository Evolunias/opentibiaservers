import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-review-canada');
}

export default function BaiakReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="baiak-review-canada" />;
}
