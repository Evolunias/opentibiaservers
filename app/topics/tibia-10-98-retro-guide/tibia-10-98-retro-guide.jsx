import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-retro-guide');
}

export default function Tibia1098RetroGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-retro-guide" />;
}
