import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvp-enforced-client');
}

export default function Tibia84PvpEnforcedClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvp-enforced-client" />;
}
