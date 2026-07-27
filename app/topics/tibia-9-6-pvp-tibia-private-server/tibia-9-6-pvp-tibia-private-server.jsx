import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-tibia-private-server');
}

export default function Tibia96PvpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-tibia-private-server" />;
}
