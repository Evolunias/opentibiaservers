import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-server-pvp');
}

export default function Tibia1098ServerPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-server-pvp" />;
}
