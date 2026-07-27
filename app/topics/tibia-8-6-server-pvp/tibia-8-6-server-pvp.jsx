import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-pvp');
}

export default function Tibia86ServerPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-pvp" />;
}
