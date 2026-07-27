import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-8-0-pvp-enforced-server');
}

export default function Marolaot80PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-8-0-pvp-enforced-server" />;
}
