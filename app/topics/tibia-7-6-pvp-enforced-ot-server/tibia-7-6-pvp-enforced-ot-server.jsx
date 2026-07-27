import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvp-enforced-ot-server');
}

export default function Tibia76PvpEnforcedOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvp-enforced-ot-server" />;
}
