import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-yurots-ots');
}

export default function HighrateYurotsOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-yurots-ots" />;
}
