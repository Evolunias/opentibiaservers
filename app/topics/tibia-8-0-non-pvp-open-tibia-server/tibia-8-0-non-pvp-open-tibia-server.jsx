import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-non-pvp-open-tibia-server');
}

export default function Tibia80NonPvpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-non-pvp-open-tibia-server" />;
}
