import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-pvp-enforced-ot-server');
}

export default function Tibia80PvpEnforcedOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-pvp-enforced-ot-server" />;
}
