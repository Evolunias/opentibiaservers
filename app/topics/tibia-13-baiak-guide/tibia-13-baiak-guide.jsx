import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-baiak-guide');
}

export default function Tibia13BaiakGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-baiak-guide" />;
}
