import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-1-non-pvp-server');
}

export default function Ameria71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-1-non-pvp-server" />;
}
