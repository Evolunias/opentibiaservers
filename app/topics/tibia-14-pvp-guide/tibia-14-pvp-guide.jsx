import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-pvp-guide');
}

export default function Tibia14PvpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-pvp-guide" />;
}
