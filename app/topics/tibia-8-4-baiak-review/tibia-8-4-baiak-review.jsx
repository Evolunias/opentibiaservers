import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-baiak-review');
}

export default function Tibia84BaiakReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-baiak-review" />;
}
