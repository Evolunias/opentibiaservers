import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-non-pvp-ot-server');
}

export default function Tibia11NonPvpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-non-pvp-ot-server" />;
}
