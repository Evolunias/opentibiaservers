import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('jamera-highscores');
}

export default function JameraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="jamera-highscores" />;
}
