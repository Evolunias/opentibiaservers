import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-baiak-review');
}

export default function Tibia100BaiakReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-baiak-review" />;
}
