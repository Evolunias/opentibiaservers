import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-open-tibia-server');
}

export default function Tibia81PvpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-open-tibia-server" />;
}
