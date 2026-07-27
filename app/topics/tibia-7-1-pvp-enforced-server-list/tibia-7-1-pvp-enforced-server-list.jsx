import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvp-enforced-server-list');
}

export default function Tibia71PvpEnforcedServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvp-enforced-server-list" />;
}
