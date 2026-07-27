import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-enforced-server');
}

export default function Tibia12PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-enforced-server" />;
}
