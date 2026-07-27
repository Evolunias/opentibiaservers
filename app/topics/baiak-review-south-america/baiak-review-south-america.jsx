import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-review-south-america');
}

export default function BaiakReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-review-south-america" />;
}
