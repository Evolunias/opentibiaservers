import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-low-exp-guide');
}

export default function Tibia74LowExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-low-exp-guide" />;
}
