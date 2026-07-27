import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-ot-server');
}

export default function Tibia96PvpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-ot-server" />;
}
