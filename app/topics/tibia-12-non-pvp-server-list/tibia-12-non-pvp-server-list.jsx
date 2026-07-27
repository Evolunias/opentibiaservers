import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-non-pvp-server-list');
}

export default function Tibia12NonPvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-non-pvp-server-list" />;
}
