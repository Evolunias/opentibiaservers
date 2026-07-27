import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-7-6-pvp-enforced-server');
}

export default function Oxygenot76PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-7-6-pvp-enforced-server" />;
}
