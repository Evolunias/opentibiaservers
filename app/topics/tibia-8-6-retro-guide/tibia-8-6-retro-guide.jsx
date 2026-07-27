import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-retro-guide');
}

export default function Tibia86RetroGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-retro-guide" />;
}
