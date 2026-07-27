import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-highscores');
}

export default function CustomTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-highscores" />;
}
