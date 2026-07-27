import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-baiak-review');
}

export default function Tibia1098BaiakReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-baiak-review" />;
}
