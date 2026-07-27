import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-enforced-server');
}

export default function Tibia11PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-enforced-server" />;
}
