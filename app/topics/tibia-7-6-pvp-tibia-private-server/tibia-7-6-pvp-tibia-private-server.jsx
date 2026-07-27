import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvp-tibia-private-server');
}

export default function Tibia76PvpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvp-tibia-private-server" />;
}
