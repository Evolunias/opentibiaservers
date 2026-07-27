import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-server');
}

export default function Tibia100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-server" />;
}
