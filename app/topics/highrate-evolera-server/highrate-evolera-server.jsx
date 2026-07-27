import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-server');
}

export default function HighrateEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-server" />;
}
