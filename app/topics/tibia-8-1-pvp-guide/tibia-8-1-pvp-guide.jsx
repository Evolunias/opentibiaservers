import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-pvp-guide');
}

export default function Tibia81PvpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-pvp-guide" />;
}
