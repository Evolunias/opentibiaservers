import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-low-exp-guide');
}

export default function Tibia71LowExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-low-exp-guide" />;
}
