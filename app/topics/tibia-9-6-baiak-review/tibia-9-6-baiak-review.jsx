import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-baiak-review');
}

export default function Tibia96BaiakReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-baiak-review" />;
}
