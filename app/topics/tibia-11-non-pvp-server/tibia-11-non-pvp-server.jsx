import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-non-pvp-server');
}

export default function Tibia11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-non-pvp-server" />;
}
