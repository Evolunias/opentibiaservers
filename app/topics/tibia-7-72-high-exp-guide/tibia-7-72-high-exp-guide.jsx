import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-high-exp-guide');
}

export default function Tibia772HighExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-high-exp-guide" />;
}
