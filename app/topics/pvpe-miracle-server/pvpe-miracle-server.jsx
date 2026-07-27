import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-miracle-server');
}

export default function PvpeMiracleServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-miracle-server" />;
}
