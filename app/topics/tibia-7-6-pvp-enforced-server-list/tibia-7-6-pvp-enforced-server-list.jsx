import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvp-enforced-server-list');
}

export default function Tibia76PvpEnforcedServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvp-enforced-server-list" />;
}
