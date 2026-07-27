import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-guide');
}

export default function HighrateYurotsGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-guide" />;
}
