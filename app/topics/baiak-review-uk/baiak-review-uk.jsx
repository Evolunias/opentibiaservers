import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-review-uk');
}

export default function BaiakReviewUkKeywordPage() {
  return <StaticKeywordPage slug="baiak-review-uk" />;
}
