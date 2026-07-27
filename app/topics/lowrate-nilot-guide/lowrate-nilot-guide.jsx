import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-guide');
}

export default function LowrateNilotGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-guide" />;
}
