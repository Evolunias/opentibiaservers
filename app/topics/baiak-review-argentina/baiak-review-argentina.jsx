import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-review-argentina');
}

export default function BaiakReviewArgentinaKeywordPage() {
  return <StaticKeywordPage slug="baiak-review-argentina" />;
}
