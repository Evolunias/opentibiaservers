import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-pvp-guide');
}

export default function Tibia11PvpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-pvp-guide" />;
}
