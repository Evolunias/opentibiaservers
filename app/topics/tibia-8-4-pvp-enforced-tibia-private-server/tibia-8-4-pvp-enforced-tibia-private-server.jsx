import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvp-enforced-tibia-private-server');
}

export default function Tibia84PvpEnforcedTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvp-enforced-tibia-private-server" />;
}
