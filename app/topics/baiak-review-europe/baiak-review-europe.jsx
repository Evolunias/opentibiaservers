import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-review-europe');
}

export default function BaiakReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="baiak-review-europe" />;
}
