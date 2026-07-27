import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-low-exp-guide');
}

export default function Tibia13LowExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-low-exp-guide" />;
}
