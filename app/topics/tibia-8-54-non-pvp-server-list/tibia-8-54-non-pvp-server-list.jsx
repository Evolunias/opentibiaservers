import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-non-pvp-server-list');
}

export default function Tibia854NonPvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-non-pvp-server-list" />;
}
