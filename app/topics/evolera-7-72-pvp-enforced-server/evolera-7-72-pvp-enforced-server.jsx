import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-72-pvp-enforced-server');
}

export default function Evolera772PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-72-pvp-enforced-server" />;
}
