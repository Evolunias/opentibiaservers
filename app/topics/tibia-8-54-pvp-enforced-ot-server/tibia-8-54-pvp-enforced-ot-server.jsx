import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-pvp-enforced-ot-server');
}

export default function Tibia854PvpEnforcedOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-pvp-enforced-ot-server" />;
}
