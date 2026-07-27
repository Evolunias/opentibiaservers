import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-4-pvp-enforced-server');
}

export default function Evolera84PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-4-pvp-enforced-server" />;
}
