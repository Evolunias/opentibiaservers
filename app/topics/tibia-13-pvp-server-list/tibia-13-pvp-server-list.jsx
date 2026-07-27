import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-server-list');
}

export default function Tibia13PvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-server-list" />;
}
