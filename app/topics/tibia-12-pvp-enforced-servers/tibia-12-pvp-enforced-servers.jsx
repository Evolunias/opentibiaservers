import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-enforced-servers');
}

export default function Tibia12PvpEnforcedServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-enforced-servers" />;
}
