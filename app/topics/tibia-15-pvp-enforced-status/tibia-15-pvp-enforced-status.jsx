import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-enforced-status');
}

export default function Tibia15PvpEnforcedStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-enforced-status" />;
}
