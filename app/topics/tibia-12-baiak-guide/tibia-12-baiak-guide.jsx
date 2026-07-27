import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-baiak-guide');
}

export default function Tibia12BaiakGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-baiak-guide" />;
}
