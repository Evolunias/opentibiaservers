import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-highscores');
}

export default function TopTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-highscores" />;
}
