import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-enforced-servers');
}

export default function Tibia96PvpEnforcedServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-enforced-servers" />;
}
