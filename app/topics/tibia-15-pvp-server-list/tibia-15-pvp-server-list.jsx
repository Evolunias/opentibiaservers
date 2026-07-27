import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-server-list');
}

export default function Tibia15PvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-server-list" />;
}
