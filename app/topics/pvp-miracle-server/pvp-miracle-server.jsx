import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-miracle-server');
}

export default function PvpMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-miracle-server" />;
}
