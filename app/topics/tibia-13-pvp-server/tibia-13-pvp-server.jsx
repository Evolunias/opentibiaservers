import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-server');
}

export default function Tibia13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-server" />;
}
