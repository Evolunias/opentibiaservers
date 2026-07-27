import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-baiak-review');
}

export default function Tibia81BaiakReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-baiak-review" />;
}
