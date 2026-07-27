import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-pvp-enforced-server');
}

export default function Marolaot12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-pvp-enforced-server" />;
}
