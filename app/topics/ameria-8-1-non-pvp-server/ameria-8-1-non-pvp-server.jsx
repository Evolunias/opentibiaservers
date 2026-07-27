import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-1-non-pvp-server');
}

export default function Ameria81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-1-non-pvp-server" />;
}
