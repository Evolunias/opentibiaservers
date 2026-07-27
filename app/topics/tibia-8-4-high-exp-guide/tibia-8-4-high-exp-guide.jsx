import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-high-exp-guide');
}

export default function Tibia84HighExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-high-exp-guide" />;
}
