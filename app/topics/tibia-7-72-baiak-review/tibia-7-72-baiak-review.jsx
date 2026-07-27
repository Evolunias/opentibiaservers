import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-baiak-review');
}

export default function Tibia772BaiakReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-baiak-review" />;
}
