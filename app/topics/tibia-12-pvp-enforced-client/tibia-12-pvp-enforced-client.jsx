import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-enforced-client');
}

export default function Tibia12PvpEnforcedClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-enforced-client" />;
}
