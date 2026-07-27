import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-baiak-guide');
}

export default function Tibia81BaiakGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-baiak-guide" />;
}
