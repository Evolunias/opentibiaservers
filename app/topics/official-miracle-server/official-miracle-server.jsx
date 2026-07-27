import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-miracle-server');
}

export default function OfficialMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="official-miracle-server" />;
}
