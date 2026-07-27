import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-highscores');
}

export default function NewTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-highscores" />;
}
