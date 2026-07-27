import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-enforced-ot-server');
}

export default function Tibia14PvpEnforcedOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-enforced-ot-server" />;
}
