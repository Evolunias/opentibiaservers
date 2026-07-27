import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-guide');
}

export default function LowrateThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-guide" />;
}
