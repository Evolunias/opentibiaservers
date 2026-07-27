import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-non-pvp-open-tibia-server');
}

export default function Tibia12NonPvpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-non-pvp-open-tibia-server" />;
}
