import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvp-server');
}

export default function Tibia84PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvp-server" />;
}
