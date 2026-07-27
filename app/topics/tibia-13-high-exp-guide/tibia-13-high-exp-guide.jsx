import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-high-exp-guide');
}

export default function Tibia13HighExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-high-exp-guide" />;
}
