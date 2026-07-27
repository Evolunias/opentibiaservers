import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-evolera-private-server');
}

export default function HighrateEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-evolera-private-server" />;
}
