import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-non-pvp-guide');
}

export default function Tibia15NonPvpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-non-pvp-guide" />;
}
