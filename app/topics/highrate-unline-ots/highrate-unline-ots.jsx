import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-unline-ots');
}

export default function HighrateUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-unline-ots" />;
}
