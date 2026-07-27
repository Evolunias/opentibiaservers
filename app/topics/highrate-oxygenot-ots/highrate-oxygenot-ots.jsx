import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-ots');
}

export default function HighrateOxygenotOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-ots" />;
}
