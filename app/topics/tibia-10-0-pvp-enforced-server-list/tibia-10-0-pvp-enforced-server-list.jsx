import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-enforced-server-list');
}

export default function Tibia100PvpEnforcedServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-enforced-server-list" />;
}
