import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-high-exp-guide');
}

export default function Tibia12HighExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-high-exp-guide" />;
}
