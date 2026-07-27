import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-non-pvp-server-list');
}

export default function Tibia772NonPvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-non-pvp-server-list" />;
}
