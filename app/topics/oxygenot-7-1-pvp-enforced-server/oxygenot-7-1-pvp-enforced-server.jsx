import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-1-pvp-enforced-server');
}

export default function Oxygenot71PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-1-pvp-enforced-server" />;
}
