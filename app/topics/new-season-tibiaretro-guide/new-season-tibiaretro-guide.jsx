import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-guide');
}

export default function NewSeasonTibiaretroGuideKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-guide" />;
}
