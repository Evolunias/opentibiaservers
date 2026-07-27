import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-enforced-ot-server');
}

export default function Tibia81PvpEnforcedOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-enforced-ot-server" />;
}
