import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-enforced-server-north-america');
}

export default function AmeriaPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-enforced-server-north-america" />;
}
