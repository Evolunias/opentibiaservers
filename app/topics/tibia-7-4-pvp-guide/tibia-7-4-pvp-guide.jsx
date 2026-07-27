import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-pvp-guide');
}

export default function Tibia74PvpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-pvp-guide" />;
}
