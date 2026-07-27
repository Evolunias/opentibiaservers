import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-non-pvp-ot-server');
}

export default function Tibia74NonPvpOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-non-pvp-ot-server" />;
}
