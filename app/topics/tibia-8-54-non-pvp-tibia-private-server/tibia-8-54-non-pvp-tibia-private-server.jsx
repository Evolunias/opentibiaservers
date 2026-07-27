import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-non-pvp-tibia-private-server');
}

export default function Tibia854NonPvpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-non-pvp-tibia-private-server" />;
}
