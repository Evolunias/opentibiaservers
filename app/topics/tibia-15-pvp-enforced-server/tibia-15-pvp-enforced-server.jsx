import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-enforced-server');
}

export default function Tibia15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-enforced-server" />;
}
