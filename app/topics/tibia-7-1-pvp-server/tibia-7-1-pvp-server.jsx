import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-pvp-server');
}

export default function Tibia71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-pvp-server" />;
}
