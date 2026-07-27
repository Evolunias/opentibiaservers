import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-server-south-america');
}

export default function AmeriaPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-server-south-america" />;
}
