import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-baiak-guide');
}

export default function Tibia11BaiakGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-baiak-guide" />;
}
