import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-review');
}

export default function Tibia12BaiakReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-review" />;
}
