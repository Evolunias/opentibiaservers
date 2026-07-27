import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-highscores');
}

export default function OfficialTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-highscores" />;
}
