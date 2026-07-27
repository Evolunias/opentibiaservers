import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('baiak-ilusion-review');
}

export default function BaiakIlusionReviewKeywordPage() {
  return <StaticKeywordPage slug="baiak-ilusion-review" />;
}
