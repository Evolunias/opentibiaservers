import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-non-pvp-server-list');
}

export default function Tibia15NonPvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-non-pvp-server-list" />;
}
