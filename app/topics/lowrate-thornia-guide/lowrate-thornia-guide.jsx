import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-guide');
}

export default function LowrateThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-guide" />;
}
