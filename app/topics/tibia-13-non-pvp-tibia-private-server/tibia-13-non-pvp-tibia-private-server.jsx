import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-non-pvp-tibia-private-server');
}

export default function Tibia13NonPvpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-non-pvp-tibia-private-server" />;
}
