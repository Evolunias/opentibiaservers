import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-baiak-guide');
}

export default function Tibia854BaiakGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-baiak-guide" />;
}
