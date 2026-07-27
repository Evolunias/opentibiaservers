import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-baiak-guide');
}

export default function Tibia71BaiakGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-baiak-guide" />;
}
