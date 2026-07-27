import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-non-pvp-ot-server');
}

export default function Tibia772NonPvpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-non-pvp-ot-server" />;
}
