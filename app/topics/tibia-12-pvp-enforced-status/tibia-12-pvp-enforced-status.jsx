import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-enforced-status');
}

export default function Tibia12PvpEnforcedStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-enforced-status" />;
}
