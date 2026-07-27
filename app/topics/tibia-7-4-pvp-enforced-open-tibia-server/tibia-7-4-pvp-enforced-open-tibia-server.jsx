import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-enforced-open-tibia-server');
}

export default function Tibia74PvpEnforcedOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-enforced-open-tibia-server" />;
}
