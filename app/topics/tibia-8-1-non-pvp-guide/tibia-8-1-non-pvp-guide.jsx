import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-non-pvp-guide');
}

export default function Tibia81NonPvpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-non-pvp-guide" />;
}
