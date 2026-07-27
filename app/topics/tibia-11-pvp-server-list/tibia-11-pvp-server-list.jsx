import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-server-list');
}

export default function Tibia11PvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-server-list" />;
}
