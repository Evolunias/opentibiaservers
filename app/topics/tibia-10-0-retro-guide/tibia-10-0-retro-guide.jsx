import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-retro-guide');
}

export default function Tibia100RetroGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-retro-guide" />;
}
