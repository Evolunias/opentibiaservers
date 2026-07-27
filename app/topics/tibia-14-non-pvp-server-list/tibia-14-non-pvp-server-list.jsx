import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-non-pvp-server-list');
}

export default function Tibia14NonPvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-non-pvp-server-list" />;
}
