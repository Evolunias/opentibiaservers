import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-enforced-server-list');
}

export default function Tibia96PvpEnforcedServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-enforced-server-list" />;
}
