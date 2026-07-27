import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-9-6-pvp-enforced-server');
}

export default function Tibiara96PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-9-6-pvp-enforced-server" />;
}
