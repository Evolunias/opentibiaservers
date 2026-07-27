import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-low-exp-guide');
}

export default function Tibia772LowExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-low-exp-guide" />;
}
