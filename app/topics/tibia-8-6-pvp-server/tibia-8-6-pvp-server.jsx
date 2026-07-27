import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvp-server');
}

export default function Tibia86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvp-server" />;
}
