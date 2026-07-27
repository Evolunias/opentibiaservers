import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-highscores');
}

export default function BestTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-highscores" />;
}
