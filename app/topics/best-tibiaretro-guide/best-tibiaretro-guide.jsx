import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-guide');
}

export default function BestTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-guide" />;
}
