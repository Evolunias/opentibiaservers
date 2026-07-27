import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-server-non-pvp');
}

export default function Tibia1098ServerNonPvpKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-server-non-pvp" />;
}
