import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-non-pvp-ot-server');
}

export default function Tibia96NonPvpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-non-pvp-ot-server" />;
}
