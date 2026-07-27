import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-highscores');
}

export default function OfficialOlderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-highscores" />;
}
