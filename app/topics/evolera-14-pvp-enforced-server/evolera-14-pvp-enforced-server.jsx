import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-pvp-enforced-server');
}

export default function Evolera14PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-pvp-enforced-server" />;
}
