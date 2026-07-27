import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-server-list');
}

export default function Tibia96PvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-server-list" />;
}
