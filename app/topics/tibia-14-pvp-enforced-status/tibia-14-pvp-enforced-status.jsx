import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-enforced-status');
}

export default function Tibia14PvpEnforcedStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-enforced-status" />;
}
