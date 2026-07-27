import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-baiak-review');
}

export default function Tibia76BaiakReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-baiak-review" />;
}
