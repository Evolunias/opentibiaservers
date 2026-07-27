import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-retro-guide');
}

export default function Tibia84RetroGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-retro-guide" />;
}
