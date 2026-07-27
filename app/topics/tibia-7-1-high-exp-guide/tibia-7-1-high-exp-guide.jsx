import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-high-exp-guide');
}

export default function Tibia71HighExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-high-exp-guide" />;
}
