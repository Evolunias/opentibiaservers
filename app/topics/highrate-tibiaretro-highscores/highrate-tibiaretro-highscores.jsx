import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiaretro-highscores');
}

export default function HighrateTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiaretro-highscores" />;
}
