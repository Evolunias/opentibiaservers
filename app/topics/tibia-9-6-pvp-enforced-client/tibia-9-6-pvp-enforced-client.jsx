import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-enforced-client');
}

export default function Tibia96PvpEnforcedClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-enforced-client" />;
}
