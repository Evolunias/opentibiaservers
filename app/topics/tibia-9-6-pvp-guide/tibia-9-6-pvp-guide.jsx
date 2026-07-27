import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-pvp-guide');
}

export default function Tibia96PvpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-pvp-guide" />;
}
