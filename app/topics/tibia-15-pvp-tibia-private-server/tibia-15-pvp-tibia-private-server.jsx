import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-tibia-private-server');
}

export default function Tibia15PvpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-tibia-private-server" />;
}
