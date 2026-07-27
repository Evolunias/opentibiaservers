import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-ot-server');
}

export default function Tibia14PvpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-ot-server" />;
}
