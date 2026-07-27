import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('amera-highscores');
}

export default function AmeraHighscoresKeywordPage() {
  return <StaticKeywordPage slug="amera-highscores" />;
}
