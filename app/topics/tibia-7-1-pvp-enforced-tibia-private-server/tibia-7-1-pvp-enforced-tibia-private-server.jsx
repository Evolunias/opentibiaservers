import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvp-enforced-tibia-private-server');
}

export default function Tibia71PvpEnforcedTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvp-enforced-tibia-private-server" />;
}
