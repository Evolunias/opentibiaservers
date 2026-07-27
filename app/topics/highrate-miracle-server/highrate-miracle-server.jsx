import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-miracle-server');
}

export default function HighrateMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-miracle-server" />;
}
