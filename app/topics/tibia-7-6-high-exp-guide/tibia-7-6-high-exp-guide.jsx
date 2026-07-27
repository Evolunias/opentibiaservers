import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-high-exp-guide');
}

export default function Tibia76HighExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-high-exp-guide" />;
}
