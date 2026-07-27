import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-review-brazil');
}

export default function BaiakReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="baiak-review-brazil" />;
}
