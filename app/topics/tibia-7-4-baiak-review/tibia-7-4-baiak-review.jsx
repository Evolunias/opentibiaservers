import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-baiak-review');
}

export default function Tibia74BaiakReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-baiak-review" />;
}
