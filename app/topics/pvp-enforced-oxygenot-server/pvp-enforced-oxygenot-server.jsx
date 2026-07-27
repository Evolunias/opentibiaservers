import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-oxygenot-server');
}

export default function PvpEnforcedOxygenotServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-oxygenot-server" />;
}
