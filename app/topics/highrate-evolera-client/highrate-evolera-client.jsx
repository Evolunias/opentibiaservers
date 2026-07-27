import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-client');
}

export default function HighrateEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-client" />;
}
