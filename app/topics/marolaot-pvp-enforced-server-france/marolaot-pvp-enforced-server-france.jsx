import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-pvp-enforced-server-france');
}

export default function MarolaotPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="marolaot-pvp-enforced-server-france" />;
}
