import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolunia-guide');
}

export default function HighrateEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolunia-guide" />;
}
