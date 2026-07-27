import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-low-exp-guide');
}

export default function Tibia15LowExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-low-exp-guide" />;
}
