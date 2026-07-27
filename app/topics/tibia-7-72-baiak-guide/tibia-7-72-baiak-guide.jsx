import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-baiak-guide');
}

export default function Tibia772BaiakGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-baiak-guide" />;
}
