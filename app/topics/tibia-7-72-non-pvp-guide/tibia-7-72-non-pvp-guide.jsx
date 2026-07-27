import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-non-pvp-guide');
}

export default function Tibia772NonPvpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-non-pvp-guide" />;
}
