import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-high-exp-guide');
}

export default function Tibia15HighExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-high-exp-guide" />;
}
