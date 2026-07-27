import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-baiak-review');
}

export default function Tibia13BaiakReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-baiak-review" />;
}
