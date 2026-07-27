import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-pvp-enforced-status');
}

export default function Tibia86PvpEnforcedStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-pvp-enforced-status" />;
}
