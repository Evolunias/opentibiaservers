import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-highscores');
}

export default function FreshStartTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-highscores" />;
}
