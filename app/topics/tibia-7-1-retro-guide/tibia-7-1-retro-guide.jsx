import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-retro-guide');
}

export default function Tibia71RetroGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-retro-guide" />;
}
