import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvp-server-list');
}

export default function Tibia80PvpServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvp-server-list" />;
}
