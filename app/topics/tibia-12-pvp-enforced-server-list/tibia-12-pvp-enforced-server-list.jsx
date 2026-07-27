import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-enforced-server-list');
}

export default function Tibia12PvpEnforcedServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-enforced-server-list" />;
}
