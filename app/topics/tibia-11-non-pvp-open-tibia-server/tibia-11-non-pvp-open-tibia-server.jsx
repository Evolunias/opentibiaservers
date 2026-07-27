import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-non-pvp-open-tibia-server');
}

export default function Tibia11NonPvpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-non-pvp-open-tibia-server" />;
}
