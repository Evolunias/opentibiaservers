import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-highscores');
}

export default function CurrentTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-highscores" />;
}
