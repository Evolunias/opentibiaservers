import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-baiak-review');
}

export default function Tibia80BaiakReviewKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-baiak-review" />;
}
