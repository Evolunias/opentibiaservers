import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-non-pvp-tibia-private-server');
}

export default function Tibia71NonPvpTibiaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-non-pvp-tibia-private-server" />;
}
