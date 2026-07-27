import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvp-open-tibia-server');
}

export default function Tibia80PvpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvp-open-tibia-server" />;
}
