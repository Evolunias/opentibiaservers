import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-1-pvp-enforced-server');
}

export default function Evolera71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-1-pvp-enforced-server" />;
}
