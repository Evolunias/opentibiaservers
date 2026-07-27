import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-9-6-pvp-enforced-server');
}

export default function Evolera96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-9-6-pvp-enforced-server" />;
}
