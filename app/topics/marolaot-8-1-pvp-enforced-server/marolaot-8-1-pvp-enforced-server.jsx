import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-1-pvp-enforced-server');
}

export default function Marolaot81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-1-pvp-enforced-server" />;
}
