import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots');
}

export default function HighrateYurotsKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots" />;
}
