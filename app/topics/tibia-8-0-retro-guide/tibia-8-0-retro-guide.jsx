import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-retro-guide');
}

export default function Tibia80RetroGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-retro-guide" />;
}
