import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvp-ot-server');
}

export default function Tibia854PvpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvp-ot-server" />;
}
