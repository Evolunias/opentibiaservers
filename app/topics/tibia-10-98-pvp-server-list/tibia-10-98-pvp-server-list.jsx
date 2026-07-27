import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-pvp-server-list');
}

export default function Tibia1098PvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-pvp-server-list" />;
}
