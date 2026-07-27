import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-7-4-pvpe-server');
}

export default function Ameria74PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-7-4-pvpe-server" />;
}
