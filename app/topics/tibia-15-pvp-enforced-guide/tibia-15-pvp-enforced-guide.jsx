import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-enforced-guide');
}

export default function Tibia15PvpEnforcedGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-enforced-guide" />;
}
