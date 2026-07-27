import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-enforced-guide');
}

export default function Tibia11PvpEnforcedGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-enforced-guide" />;
}
