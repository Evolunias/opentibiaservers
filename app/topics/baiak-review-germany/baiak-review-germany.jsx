import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-review-germany');
}

export default function BaiakReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="baiak-review-germany" />;
}
