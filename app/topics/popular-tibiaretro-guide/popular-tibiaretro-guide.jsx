import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-guide');
}

export default function PopularTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-guide" />;
}
