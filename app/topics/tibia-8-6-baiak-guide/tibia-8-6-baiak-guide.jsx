import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-baiak-guide');
}

export default function Tibia86BaiakGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-baiak-guide" />;
}
