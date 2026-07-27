import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-baiak-guide');
}

export default function Tibia76BaiakGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-baiak-guide" />;
}
