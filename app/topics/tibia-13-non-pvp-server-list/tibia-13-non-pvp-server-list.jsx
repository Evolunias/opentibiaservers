import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-non-pvp-server-list');
}

export default function Tibia13NonPvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-non-pvp-server-list" />;
}
