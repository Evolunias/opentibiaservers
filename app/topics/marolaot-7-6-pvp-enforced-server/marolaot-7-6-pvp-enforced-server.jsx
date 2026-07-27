import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-7-6-pvp-enforced-server');
}

export default function Marolaot76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-7-6-pvp-enforced-server" />;
}
