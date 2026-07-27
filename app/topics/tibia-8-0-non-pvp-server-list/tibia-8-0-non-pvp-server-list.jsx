import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-non-pvp-server-list');
}

export default function Tibia80NonPvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-non-pvp-server-list" />;
}
