import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-pvp-guide');
}

export default function Tibia13PvpGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-pvp-guide" />;
}
