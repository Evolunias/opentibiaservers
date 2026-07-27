import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-9-6-pvp-enforced-server');
}

export default function Tibiame96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiame-9-6-pvp-enforced-server" />;
}
