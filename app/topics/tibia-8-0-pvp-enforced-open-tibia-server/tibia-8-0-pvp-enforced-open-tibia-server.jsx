import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvp-enforced-open-tibia-server');
}

export default function Tibia80PvpEnforcedOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvp-enforced-open-tibia-server" />;
}
