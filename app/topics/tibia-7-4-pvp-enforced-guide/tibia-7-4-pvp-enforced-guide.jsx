import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-enforced-guide');
}

export default function Tibia74PvpEnforcedGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-enforced-guide" />;
}
