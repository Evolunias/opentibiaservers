import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-enforced-server-list');
}

export default function Tibia15PvpEnforcedServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-enforced-server-list" />;
}
