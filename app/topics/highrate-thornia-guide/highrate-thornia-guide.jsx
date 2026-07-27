import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thornia-guide');
}

export default function HighrateThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-thornia-guide" />;
}
