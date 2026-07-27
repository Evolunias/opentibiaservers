import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-1-pvp-enforced-server');
}

export default function Evolera81PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-1-pvp-enforced-server" />;
}
