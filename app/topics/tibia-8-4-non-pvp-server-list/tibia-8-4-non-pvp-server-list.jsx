import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-non-pvp-server-list');
}

export default function Tibia84NonPvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-non-pvp-server-list" />;
}
