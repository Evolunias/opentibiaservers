import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-non-pvp-open-tibia-server');
}

export default function Tibia13NonPvpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-non-pvp-open-tibia-server" />;
}
