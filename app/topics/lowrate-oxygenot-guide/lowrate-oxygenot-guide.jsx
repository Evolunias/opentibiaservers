import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oxygenot-guide');
}

export default function LowrateOxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oxygenot-guide" />;
}
