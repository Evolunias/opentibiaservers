import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-pvp-guide');
}

export default function Tibia15PvpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-pvp-guide" />;
}
