import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-guide');
}

export default function CurrentTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-guide" />;
}
