import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-baiak-guide');
}

export default function Tibia80BaiakGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-baiak-guide" />;
}
