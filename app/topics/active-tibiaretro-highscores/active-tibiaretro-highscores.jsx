import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-highscores');
}

export default function ActiveTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-highscores" />;
}
