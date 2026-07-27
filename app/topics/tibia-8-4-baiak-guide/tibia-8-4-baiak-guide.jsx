import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-baiak-guide');
}

export default function Tibia84BaiakGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-baiak-guide" />;
}
