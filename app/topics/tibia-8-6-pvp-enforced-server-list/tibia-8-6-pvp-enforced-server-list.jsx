import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvp-enforced-server-list');
}

export default function Tibia86PvpEnforcedServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvp-enforced-server-list" />;
}
