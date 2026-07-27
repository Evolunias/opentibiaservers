import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-pvp-enforced-server');
}

export default function Marolaot11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-pvp-enforced-server" />;
}
