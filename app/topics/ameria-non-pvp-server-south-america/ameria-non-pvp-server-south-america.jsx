import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-non-pvp-server-south-america');
}

export default function AmeriaNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-non-pvp-server-south-america" />;
}
