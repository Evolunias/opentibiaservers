import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-pvp-enforced-client');
}

export default function Tibia100PvpEnforcedClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-pvp-enforced-client" />;
}
