import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-retro-guide');
}

export default function Tibia12RetroGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-retro-guide" />;
}
