import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-non-pvp-server-list');
}

export default function Tibia96NonPvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-non-pvp-server-list" />;
}
