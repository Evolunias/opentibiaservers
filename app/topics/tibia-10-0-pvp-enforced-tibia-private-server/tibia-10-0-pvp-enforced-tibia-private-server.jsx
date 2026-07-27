import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-enforced-tibia-private-server');
}

export default function Tibia100PvpEnforcedTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-enforced-tibia-private-server" />;
}
