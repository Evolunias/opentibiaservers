import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-10-98-pvp-enforced-server');
}

export default function Evolera1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-10-98-pvp-enforced-server" />;
}
