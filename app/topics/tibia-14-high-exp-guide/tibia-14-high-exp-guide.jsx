import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-high-exp-guide');
}

export default function Tibia14HighExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-high-exp-guide" />;
}
