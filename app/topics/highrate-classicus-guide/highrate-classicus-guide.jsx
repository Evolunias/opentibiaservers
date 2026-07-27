import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-classicus-guide');
}

export default function HighrateClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-classicus-guide" />;
}
