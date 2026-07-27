import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-enforced-open-tibia-server');
}

export default function Tibia11PvpEnforcedOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-enforced-open-tibia-server" />;
}
