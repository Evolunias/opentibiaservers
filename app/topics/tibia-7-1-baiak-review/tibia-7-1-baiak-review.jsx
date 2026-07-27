import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-baiak-review');
}

export default function Tibia71BaiakReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-baiak-review" />;
}
