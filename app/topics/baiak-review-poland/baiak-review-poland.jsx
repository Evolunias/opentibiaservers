import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-review-poland');
}

export default function BaiakReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="baiak-review-poland" />;
}
