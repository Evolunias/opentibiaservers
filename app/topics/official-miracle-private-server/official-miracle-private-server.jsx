import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-private-server');
}

export default function OfficialMiraclePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-private-server" />;
}
