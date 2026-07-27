import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-open-tibia-server');
}

export default function Tibia74PvpOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-open-tibia-server" />;
}
