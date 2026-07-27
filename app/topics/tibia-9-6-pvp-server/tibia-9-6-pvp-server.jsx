import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-server');
}

export default function Tibia96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-server" />;
}
