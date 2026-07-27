import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-non-pvp-tibia-private-server');
}

export default function Tibia15NonPvpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-non-pvp-tibia-private-server" />;
}
