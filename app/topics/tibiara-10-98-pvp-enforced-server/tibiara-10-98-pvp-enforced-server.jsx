import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-10-98-pvp-enforced-server');
}

export default function Tibiara1098PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibiara-10-98-pvp-enforced-server" />;
}
