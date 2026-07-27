import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-private-server');
}

export default function HighrateMiraclePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-private-server" />;
}
