import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-enforced-open-tibia-server');
}

export default function Tibia96PvpEnforcedOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-enforced-open-tibia-server" />;
}
