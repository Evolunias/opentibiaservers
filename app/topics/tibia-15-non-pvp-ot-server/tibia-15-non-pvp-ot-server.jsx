import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-non-pvp-ot-server');
}

export default function Tibia15NonPvpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-non-pvp-ot-server" />;
}
