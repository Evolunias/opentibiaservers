import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-baiak-review');
}

export default function Tibia14BaiakReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-baiak-review" />;
}
