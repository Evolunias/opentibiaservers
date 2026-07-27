import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-guide');
}

export default function HighrateTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-guide" />;
}
