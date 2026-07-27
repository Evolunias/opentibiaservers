import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-enforced-open-tibia-server');
}

export default function Tibia14PvpEnforcedOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-enforced-open-tibia-server" />;
}
