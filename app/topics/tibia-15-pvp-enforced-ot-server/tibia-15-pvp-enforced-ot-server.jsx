import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-enforced-ot-server');
}

export default function Tibia15PvpEnforcedOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-enforced-ot-server" />;
}
