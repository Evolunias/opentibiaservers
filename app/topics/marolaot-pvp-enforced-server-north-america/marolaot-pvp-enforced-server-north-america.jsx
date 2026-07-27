import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-enforced-server-north-america');
}

export default function MarolaotPvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-enforced-server-north-america" />;
}
