import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-pvp-enforced-server');
}

export default function Marolaot15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-pvp-enforced-server" />;
}
