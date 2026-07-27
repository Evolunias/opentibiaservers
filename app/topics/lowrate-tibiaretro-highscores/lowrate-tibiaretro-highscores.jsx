import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-highscores');
}

export default function LowrateTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-highscores" />;
}
