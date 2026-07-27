import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-enforced-client');
}

export default function Tibia11PvpEnforcedClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-enforced-client" />;
}
