import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-highscores');
}

export default function OfficialElderaHighscoresKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-highscores" />;
}
