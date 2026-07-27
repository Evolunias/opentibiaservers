import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-highscores');
}

export default function PopularTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-highscores" />;
}
