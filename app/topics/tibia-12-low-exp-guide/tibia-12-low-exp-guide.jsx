import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-low-exp-guide');
}

export default function Tibia12LowExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-low-exp-guide" />;
}
