import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-review-north-america');
}

export default function BaiakReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-review-north-america" />;
}
