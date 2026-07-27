import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-review-usa');
}

export default function BaiakReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="baiak-review-usa" />;
}
