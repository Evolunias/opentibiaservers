import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-non-pvp-open-tibia-server');
}

export default function Tibia15NonPvpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-non-pvp-open-tibia-server" />;
}
