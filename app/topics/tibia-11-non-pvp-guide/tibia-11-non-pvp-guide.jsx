import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-non-pvp-guide');
}

export default function Tibia11NonPvpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-non-pvp-guide" />;
}
