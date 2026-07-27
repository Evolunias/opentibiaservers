import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-4-pvp-enforced-server');
}

export default function Evolera74PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-4-pvp-enforced-server" />;
}
