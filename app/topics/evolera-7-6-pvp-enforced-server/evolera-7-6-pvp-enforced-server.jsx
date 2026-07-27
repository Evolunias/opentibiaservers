import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-6-pvp-enforced-server');
}

export default function Evolera76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-6-pvp-enforced-server" />;
}
