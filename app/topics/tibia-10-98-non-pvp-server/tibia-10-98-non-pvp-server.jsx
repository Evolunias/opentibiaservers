import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-non-pvp-server');
}

export default function Tibia1098NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-non-pvp-server" />;
}
