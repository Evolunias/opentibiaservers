import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-server-list');
}

export default function Tibia14PvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-server-list" />;
}
