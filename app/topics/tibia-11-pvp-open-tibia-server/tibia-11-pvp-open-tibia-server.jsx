import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-open-tibia-server');
}

export default function Tibia11PvpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-open-tibia-server" />;
}
