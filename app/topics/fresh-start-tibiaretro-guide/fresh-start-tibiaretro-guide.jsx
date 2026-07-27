import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-guide');
}

export default function FreshStartTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-guide" />;
}
