import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-enforced-guide');
}

export default function Tibia96PvpEnforcedGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-enforced-guide" />;
}
