import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-guide');
}

export default function TopTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-guide" />;
}
