import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvp-enforced-server-list');
}

export default function Tibia80PvpEnforcedServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvp-enforced-server-list" />;
}
