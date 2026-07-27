import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-ot-server');
}

export default function Tibia100PvpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-ot-server" />;
}
