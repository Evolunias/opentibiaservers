import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-enforced-client');
}

export default function Tibia15PvpEnforcedClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-enforced-client" />;
}
