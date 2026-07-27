import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-pvp-guide');
}

export default function Tibia12PvpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-pvp-guide" />;
}
