import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-enforced-server-usa');
}

export default function MarolaotPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-enforced-server-usa" />;
}
