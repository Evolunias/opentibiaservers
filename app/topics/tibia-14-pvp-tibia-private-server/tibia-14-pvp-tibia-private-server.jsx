import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-tibia-private-server');
}

export default function Tibia14PvpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-tibia-private-server" />;
}
