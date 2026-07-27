import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-non-pvp-tibia-private-server');
}

export default function Tibia1098NonPvpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-non-pvp-tibia-private-server" />;
}
