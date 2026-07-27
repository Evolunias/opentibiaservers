import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-ots');
}

export default function HighrateEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-ots" />;
}
