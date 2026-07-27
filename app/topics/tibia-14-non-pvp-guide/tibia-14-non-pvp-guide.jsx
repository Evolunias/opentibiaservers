import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-non-pvp-guide');
}

export default function Tibia14NonPvpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-non-pvp-guide" />;
}
