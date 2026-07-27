import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-review-mexico');
}

export default function BaiakReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="baiak-review-mexico" />;
}
