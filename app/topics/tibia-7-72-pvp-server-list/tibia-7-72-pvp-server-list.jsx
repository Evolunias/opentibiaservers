import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-pvp-server-list');
}

export default function Tibia772PvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-pvp-server-list" />;
}
