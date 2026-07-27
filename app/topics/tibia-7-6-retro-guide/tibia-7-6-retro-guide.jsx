import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-retro-guide');
}

export default function Tibia76RetroGuideKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-retro-guide" />;
}
