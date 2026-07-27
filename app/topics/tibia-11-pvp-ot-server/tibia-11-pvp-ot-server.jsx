import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-ot-server');
}

export default function Tibia11PvpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-ot-server" />;
}
