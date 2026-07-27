import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-enforced-client');
}

export default function Tibia13PvpEnforcedClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-enforced-client" />;
}
