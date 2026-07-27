import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-low-exp-guide');
}

export default function Tibia100LowExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-low-exp-guide" />;
}
