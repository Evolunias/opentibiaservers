import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-retro-guide');
}

export default function Tibia772RetroGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-retro-guide" />;
}
