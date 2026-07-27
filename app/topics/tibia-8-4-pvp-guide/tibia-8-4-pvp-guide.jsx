import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-pvp-guide');
}

export default function Tibia84PvpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-pvp-guide" />;
}
