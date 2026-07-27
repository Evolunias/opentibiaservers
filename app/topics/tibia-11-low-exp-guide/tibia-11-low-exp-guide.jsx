import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-low-exp-guide');
}

export default function Tibia11LowExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-low-exp-guide" />;
}
