import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-enforced-tibia-private-server');
}

export default function Tibia11PvpEnforcedTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-enforced-tibia-private-server" />;
}
