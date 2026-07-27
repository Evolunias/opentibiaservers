import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-high-exp-guide');
}

export default function Tibia100HighExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-high-exp-guide" />;
}
