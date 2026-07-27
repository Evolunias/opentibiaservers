import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-retro-guide');
}

export default function Tibia74RetroGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-retro-guide" />;
}
