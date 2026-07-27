import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-baiak-review');
}

export default function Tibia854BaiakReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-baiak-review" />;
}
