import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-enforced-server-mexico');
}

export default function AmeriaPvpEnforcedServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-enforced-server-mexico" />;
}
