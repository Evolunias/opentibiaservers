import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-baiak-guide');
}

export default function Tibia15BaiakGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-baiak-guide" />;
}
