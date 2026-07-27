import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-high-exp-guide');
}

export default function Tibia96HighExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-high-exp-guide" />;
}
