import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-9-6-pvp-enforced-server');
}

export default function Oxygenot96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-9-6-pvp-enforced-server" />;
}
