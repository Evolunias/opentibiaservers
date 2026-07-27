import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-high-exp-guide');
}

export default function Tibia81HighExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-high-exp-guide" />;
}
