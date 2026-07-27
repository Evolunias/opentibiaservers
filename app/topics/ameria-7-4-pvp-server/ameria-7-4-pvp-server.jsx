import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-4-pvp-server');
}

export default function Ameria74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-4-pvp-server" />;
}
