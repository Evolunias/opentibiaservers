import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvp-server-list');
}

export default function Tibia86PvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvp-server-list" />;
}
