import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-non-pvp-server');
}

export default function Tibia84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-non-pvp-server" />;
}
