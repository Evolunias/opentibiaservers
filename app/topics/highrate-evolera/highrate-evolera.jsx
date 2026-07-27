import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera');
}

export default function HighrateEvoleraKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera" />;
}
