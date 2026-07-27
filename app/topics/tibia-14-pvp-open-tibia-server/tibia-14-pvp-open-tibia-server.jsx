import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-open-tibia-server');
}

export default function Tibia14PvpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-open-tibia-server" />;
}
