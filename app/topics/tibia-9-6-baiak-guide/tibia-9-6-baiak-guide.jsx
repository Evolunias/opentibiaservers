import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-baiak-guide');
}

export default function Tibia96BaiakGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-baiak-guide" />;
}
