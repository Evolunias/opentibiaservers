import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-pvp-enforced-client');
}

export default function Tibia76PvpEnforcedClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-pvp-enforced-client" />;
}
