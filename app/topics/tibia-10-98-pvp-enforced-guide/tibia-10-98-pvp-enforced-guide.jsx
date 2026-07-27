import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-pvp-enforced-guide');
}

export default function Tibia1098PvpEnforcedGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-pvp-enforced-guide" />;
}
