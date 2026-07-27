import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-review-latin-america');
}

export default function BaiakReviewLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="baiak-review-latin-america" />;
}
