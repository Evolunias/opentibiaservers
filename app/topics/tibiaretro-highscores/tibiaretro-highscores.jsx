import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-highscores');
}

export default function TibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-highscores" />;
}
