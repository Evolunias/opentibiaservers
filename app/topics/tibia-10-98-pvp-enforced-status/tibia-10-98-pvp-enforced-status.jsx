import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-pvp-enforced-status');
}

export default function Tibia1098PvpEnforcedStatusKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-pvp-enforced-status" />;
}
