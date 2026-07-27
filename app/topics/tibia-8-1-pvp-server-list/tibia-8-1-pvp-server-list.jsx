import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-server-list');
}

export default function Tibia81PvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-server-list" />;
}
