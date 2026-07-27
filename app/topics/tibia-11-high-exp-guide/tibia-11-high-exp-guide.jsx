import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-high-exp-guide');
}

export default function Tibia11HighExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-high-exp-guide" />;
}
