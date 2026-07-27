import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-high-exp-guide');
}

export default function Tibia80HighExpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-high-exp-guide" />;
}
