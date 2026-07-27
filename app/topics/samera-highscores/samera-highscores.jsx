import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('samera-highscores');
}

export default function SameraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="samera-highscores" />;
}
