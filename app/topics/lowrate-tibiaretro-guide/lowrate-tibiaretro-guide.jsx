import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-guide');
}

export default function LowrateTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-guide" />;
}
