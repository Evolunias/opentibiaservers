import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-enforced-guide');
}

export default function Tibia81PvpEnforcedGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-enforced-guide" />;
}
