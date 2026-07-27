import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-enforced-server-list');
}

export default function Tibia14PvpEnforcedServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-enforced-server-list" />;
}
