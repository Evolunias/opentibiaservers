import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvp-server');
}

export default function Tibia854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvp-server" />;
}
