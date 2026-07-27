import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-nilot-ots');
}

export default function HighrateNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-nilot-ots" />;
}
