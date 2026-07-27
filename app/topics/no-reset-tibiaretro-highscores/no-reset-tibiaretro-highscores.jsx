import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-highscores');
}

export default function NoResetTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-highscores" />;
}
