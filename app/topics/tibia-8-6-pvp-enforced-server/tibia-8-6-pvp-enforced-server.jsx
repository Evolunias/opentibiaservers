import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvp-enforced-server');
}

export default function Tibia86PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvp-enforced-server" />;
}
