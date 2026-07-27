import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-0-pvp-enforced-server');
}

export default function Evolera100PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-0-pvp-enforced-server" />;
}
