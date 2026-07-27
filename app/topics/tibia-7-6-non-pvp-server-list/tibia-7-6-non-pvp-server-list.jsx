import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-non-pvp-server-list');
}

export default function Tibia76NonPvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-non-pvp-server-list" />;
}
