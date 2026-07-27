import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-highscores');
}

export default function RealMapTibiaretroHighscoresKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-highscores" />;
}
