import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-non-pvp-server-list');
}

export default function Tibia11NonPvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-non-pvp-server-list" />;
}
