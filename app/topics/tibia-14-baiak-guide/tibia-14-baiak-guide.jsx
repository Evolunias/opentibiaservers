import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-baiak-guide');
}

export default function Tibia14BaiakGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-baiak-guide" />;
}
