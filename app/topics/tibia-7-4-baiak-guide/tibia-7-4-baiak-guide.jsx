import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-baiak-guide');
}

export default function Tibia74BaiakGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-baiak-guide" />;
}
