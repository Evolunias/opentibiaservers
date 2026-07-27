import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-tibiaretro-highscores');
}

export default function NewSeasonTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-season-tibiaretro-highscores" />;
}
