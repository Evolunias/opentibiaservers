import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-baiak-guide');
}

export default function Tibia100BaiakGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-baiak-guide" />;
}
