import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-review-sweden');
}

export default function BaiakReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="baiak-review-sweden" />;
}
